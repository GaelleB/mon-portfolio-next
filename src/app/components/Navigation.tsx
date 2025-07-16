'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('Home');

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Stack', href: '#stack' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-white/90 backdrop-blur-md rounded-full px-2 py-2 shadow-lg border border-gray-200/50">
                <div className="flex items-center space-x-1">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveSection(item.name)}
                            className={`
                                relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300
                                ${activeSection === item.name 
                                    ? 'text-white' 
                                    : 'text-gray-700 hover:text-gray-900'
                                }
                            `}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {activeSection === item.name && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-md"
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
        </nav>
    );
}