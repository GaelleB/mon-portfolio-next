'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('Accueil');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavigating, setIsNavigating] = useState(false);
    
    
    // Auto-detect active section + hide/show navigation
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollPosition = currentScrollY + 100; // Offset for better detection

            // Keep navigation always visible
            setIsNavVisible(true);

            setLastScrollY(currentScrollY);

            // Get all sections
            const sections = [
                { name: 'Accueil', element: document.getElementById('home') || document.querySelector('section:first-child') },
                { name: 'À propos', element: document.getElementById('about') },
                { name: 'Compétences', element: document.getElementById('stack') },
                { name: 'Projets', element: document.getElementById('projects') },
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
    }, [lastScrollY, isNavigating]);


    const navItems = [
        { name: 'Accueil', href: '#home' },
        { name: 'À propos', href: '#about' },
        { name: 'Compétences', href: '#stack' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (itemName: string) => {
        setActiveSection(itemName);
        setIsNavigating(true);
        setIsNavVisible(true); // Force navigation to be visible
        
        // Reset navigation state after scroll animation completes
        setTimeout(() => {
            setIsNavigating(false);
        }, 1000); // 1 second should be enough for smooth scroll to complete
    };

    return (
        <header>
            {/* Bande transparente/floue pleine largeur - cachée en mobile */}
            <motion.div 
                className="hidden md:block fixed top-0 left-0 w-full z-40"
                style={{ 
                    height: '76px',
                    opacity: 1,
                    backdropFilter: 'blur(15px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    width: '100%'
                }}
            />
            
            {/* Navigation Desktop - cachée en mobile */}
            <motion.nav 
                className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
                role="navigation" 
                aria-label="Navigation principale"
                animate={{
                    y: isNavVisible ? 0 : -100,
                    opacity: isNavVisible ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="bg-white rounded-full px-0.5 py-0.5 shadow-lg border border-gray-200/50" style={{ backgroundColor: 'white' }}>
                    <div className="flex items-center -space-x-0.5">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={() => handleNavClick(item.name)}
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
                                        transition={{ type: "spring", stiffness: 800, damping: 25 }}
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

            {/* Navigation Mobile - Menu Burger */}
            <motion.div 
                className="md:hidden fixed top-6 right-6 z-50"
                animate={{
                    y: isNavVisible ? 0 : -100,
                    opacity: isNavVisible ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <motion.button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-3"
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        animate={isMobileMenuOpen ? "open" : "closed"}
                        className="w-6 h-6 relative"
                    >
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: 45, y: 6 }
                            }}
                            className="absolute h-0.5 w-full bg-gray-300 block top-1"
                        />
                        <motion.span
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            className="absolute h-0.5 w-full bg-gray-300 block top-3"
                        />
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: -45, y: -6 }
                            }}
                            className="absolute h-0.5 w-full bg-gray-300 block top-5"
                        />
                    </motion.div>
                </motion.button>

                {/* Menu Mobile Overlay */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isMobileMenuOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-16 right-0 bg-white rounded-2xl shadow-xl border border-gray-200/50 p-6 min-w-[200px] ${
                        isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                >
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={() => {
                                    handleNavClick(item.name);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`
                                    px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200
                                    ${activeSection === item.name 
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }
                                `}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </header>
    );
}