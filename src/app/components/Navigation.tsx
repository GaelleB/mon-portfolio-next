'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('Home');
    
    // Scroll-based transparency
    const { scrollY } = useScroll();
    const navOpacity = useTransform(scrollY, [0, 100], [0.9, 0.7]);
    
    // Auto-detect active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Offset for better detection
            
            // Get all sections
            const sections = [
                { name: 'Home', element: document.getElementById('home') || document.querySelector('section:first-child') },
                { name: 'About', element: document.getElementById('about') },
                { name: 'Stack', element: document.getElementById('stack') },
                { name: 'Projects', element: document.getElementById('projects') },
                { name: 'Contact', element: document.getElementById('contact') }
            ];
            
            // Find the current active section
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.element) {
                    const rect = section.element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;
                    
                    if (scrollPosition >= elementTop - 200) {
                        setActiveSection(section.name);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Stack', href: '#stack' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header>
            {/* Bande transparente/floue pleine largeur */}
            <motion.div 
                className="fixed top-0 left-0 w-full z-40 backdrop-blur-md"
                style={{ 
                    height: '76px',
                    opacity: navOpacity,
                    backgroundColor: 'rgba(255, 255, 255, 0.3)'
                }}
            />
            
            {/* Navigation par-dessus la bande */}
            <motion.nav 
                className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
                role="navigation" 
                aria-label="Navigation principale"
            >
                <div className="bg-white rounded-full px-0.5 py-0.5 shadow-lg border border-gray-200/50" style={{ backgroundColor: 'white' }}>
                    <div className="flex items-center -space-x-0.5">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveSection(item.name)}
                                className={`
                                    relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300
                                    ${activeSection === item.name 
                                        ? 'text-white' 
                                        : 'text-gray-700 hover:text-gray-900'
                                    }
                                `}
                                whileHover={activeSection !== item.name ? { scale: 1.05 } : {}}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeSection === item.name && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-y-0.5 inset-x-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-md"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">
                                    {item.name}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.nav>
        </header>
    );
}