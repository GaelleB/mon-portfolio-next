// components/Navigation.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
    activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

    return (
        <>
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 w-full z-50 bg-gradient-to-b from-neutral-900/90 to-transparent backdrop-blur-md"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                <motion.div className="text-3xl font-bold text-yellow-400" whileHover={{ scale: 1.05 }}>
                <span className="text-yellow-400">G</span>
                <span className="text-white">B</span>
                <span className="text-yellow-400 text-xs ml-2">✨</span>
                </motion.div>

                <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                    <motion.a
                    key={item}
                    href={`#${item}`}
                    className={`capitalize font-medium transition-all ${
                        activeSection === item
                        ? 'text-yellow-400 font-semibold'
                        : 'text-white/70 hover:text-white'
                    }`} 
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    {item}
                    </motion.a>
                ))}
                </div>

                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-yellow-400"
                aria-label="Toggle Menu"
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                    />
                </svg>
                </button>
            </div>
            </div>
        </motion.nav>

        <AnimatePresence>
            {isMenuOpen && (
            <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                className="fixed inset-y-0 right-0 w-72 bg-neutral-900/95 backdrop-blur-lg z-40 md:hidden"
            >
                <div className="flex flex-col space-y-6 p-8 mt-20">
                {navItems.map((item, index) => (
                    <motion.a
                    key={item}
                    href={`#${item}`}
                    className="capitalize text-xl font-medium text-white/80 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    >
                    {item}
                    </motion.a>
                ))}
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </>
    );
};

export default Navigation;