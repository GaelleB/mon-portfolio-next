'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    
    // Effet pour détecter le scroll
    useEffect(() => {
        const handleScroll = () => {
        // On considère qu'on a scrollé après 50px
        setIsScrolled(window.scrollY > 50)
        }
        
        // Ajouter l'écouteur d'événements
        window.addEventListener('scroll', handleScroll)
        
        // Nettoyer l'écouteur quand le composant est démonté
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    const navItems = ['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact']
    
    return (
        <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
                className="text-3xl font-bold"
                whileHover={{ scale: 1.05 }}
            >
                <span className="text-yellow-400">G</span>
                <span className="text-pink-500">B</span>
            </motion.div>
            
            {/* Menu de navigation */}
            <div className="flex space-x-8">
                {navItems.map((item) => (
                <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {item}
                </motion.a>
                ))}
            </div>
            </div>
        </div>
        </motion.nav>
    )
}