'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('Accueil');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Auto-detect active section
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            const sections = [
                { name: 'Accueil', element: document.getElementById('home') || document.querySelector('section:first-child') },
                { name: 'À propos', element: document.getElementById('about') },
                { name: 'Stack', element: document.getElementById('stack') },
                { name: 'Projets', element: document.getElementById('projects') },
                { name: 'Contact', element: document.getElementById('contact') }
            ];

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
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Accueil', href: '#home' },
        { name: 'À propos', href: '#about' },
        { name: 'Stack', href: '#stack' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (itemName: string) => {
        setActiveSection(itemName);
        setIsMobileMenuOpen(false);
    };

    return (
        <header>
            {/* Navigation Desktop - Style éditorial minimaliste */}
            <nav
                className="hidden md:block fixed top-0 left-0 w-full z-50 py-6"
                role="navigation"
                aria-label="Navigation principale"
                style={{ backgroundColor: '#f5f0e8' }}
            >
                <div className="flex items-center justify-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => handleNavClick(item.name)}
                            className="relative font-mono text-xs uppercase tracking-wider transition-all duration-300"
                            style={{
                                color: activeSection === item.name ? '#f97316' : '#253439',
                                letterSpacing: '0.1em'
                            }}
                        >
                            {item.name}
                            {activeSection === item.name && (
                                <motion.div
                                    layoutId="activeUnderline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                                    style={{ backgroundColor: '#f97316' }}
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Navigation Mobile - Menu Burger */}
            <div className="md:hidden fixed top-6 right-6 z-50">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2"
                    aria-label="Menu"
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
                            className="absolute h-0.5 w-full block top-1"
                            style={{ backgroundColor: '#f97316' }}
                        />
                        <motion.span
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            className="absolute h-0.5 w-full block top-3"
                            style={{ backgroundColor: '#f97316' }}
                        />
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: -45, y: -6 }
                            }}
                            className="absolute h-0.5 w-full block top-5"
                            style={{ backgroundColor: '#f97316' }}
                        />
                    </motion.div>
                </button>

                {/* Menu Mobile Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-16 right-0 rounded-lg shadow-lg p-6 min-w-[200px] ${
                        isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                    style={{ backgroundColor: '#f5f0e8' }}
                >
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => handleNavClick(item.name)}
                                className="font-mono text-xs uppercase tracking-wider transition-colors duration-300 pb-2"
                                style={{
                                    color: activeSection === item.name ? '#f97316' : '#253439',
                                    letterSpacing: '0.1em',
                                    borderBottom: activeSection === item.name ? '2px solid #f97316' : '2px solid transparent'
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </header>
    );
}