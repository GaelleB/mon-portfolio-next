// components/Navigation.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
    activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { name: 'home', label: 'Home' },
        { name: 'about', label: 'About' },
        { name: 'skills', label: 'Skills' },
        { name: 'projects', label: 'Projects' },
        { name: 'contact', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                    isScrolled 
                        ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl border-b border-gray-800' 
                        : 'bg-gradient-to-b from-gray-900/80 to-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo style NYC */}
                        <motion.div 
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="relative">
                                <span className="text-3xl font-display font-bold tracking-wider">
                                    <span className="text-yellow-400">GB</span>
                                </span>
                                {/* Petit indicateur lumineux */}
                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                                />
                            </div>
                            <span className="text-xs text-gray-400 font-mono-custom hidden sm:block">
                            </span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={`#${item.name}`}
                                    className="relative px-4 py-2 group"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <span className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                                        activeSection === item.name
                                            ? 'text-yellow-400'
                                            : 'text-gray-300 group-hover:text-white'
                                    }`}>
                                        {item.label}
                                    </span>
                                    
                                    {/* Indicateur actif style subway */}
                                    {activeSection === item.name && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                                            initial={false}
                                        />
                                    )}
                                    
                                    {/* Hover effect */}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:flex items-center space-x-4">
                            <motion.a
                                href="#contact"
                                className="btn-taxi text-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                HIRE ME
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center"
                            aria-label="Toggle Menu"
                        >
                            <div className="relative">
                                <span className={`absolute block h-0.5 w-6 bg-yellow-400 transition-all duration-300 ${
                                    isMenuOpen ? 'rotate-45' : '-translate-y-2'
                                }`} />
                                <span className={`absolute block h-0.5 w-6 bg-yellow-400 transition-all duration-300 ${
                                    isMenuOpen ? 'opacity-0' : ''
                                }`} />
                                <span className={`absolute block h-0.5 w-6 bg-yellow-400 transition-all duration-300 ${
                                    isMenuOpen ? '-rotate-45' : 'translate-y-2'
                                }`} />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu - Style NYC Subway */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        
                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 20 }}
                            className="fixed top-0 right-0 bottom-0 w-80 bg-gray-900 shadow-2xl z-50 md:hidden"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-800">
                                <span className="text-xl font-display font-bold text-yellow-400">MENU</span>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            
                            {/* Navigation Items */}
                            <div className="p-6">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={`#${item.name}`}
                                        className="block py-4 border-b border-gray-800 last:border-0"
                                        onClick={() => setIsMenuOpen(false)}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="text-lg font-medium text-gray-300 hover:text-yellow-400 transition-colors uppercase tracking-wider">
                                            {item.label}
                                        </span>
                                    </motion.a>
                                ))}
                                
                                {/* Mobile CTA */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-8"
                                >
                                    <a
                                        href="#contact"
                                        className="btn-taxi w-full text-center block"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        GET IN TOUCH
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;