'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation({ activeSection }: { activeSection: string }) {
    const [isOpen, setIsOpen] = useState(false)
    const links = ['home', 'about', 'skills', 'projects', 'contact']

    return (
        <>
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md text-white"
        >
            <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
            <div className="text-2xl font-bold">
                <span className="text-yellow-400">G</span>B<span className="text-xs ml-1">✨</span>
            </div>
            <div className="hidden md:flex space-x-6">
                {links.map((link) => (
                <motion.a
                    key={link}
                    href={`#${link}`}
                    className={`capitalize hover:text-yellow-400 transition-colors ${
                    activeSection === link ? 'text-yellow-400 font-semibold' : 'text-white'
                    }`}
                >
                    {link}
                </motion.a>
                ))}
            </div>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                    }
                />
                </svg>
            </button>
            </div>
        </motion.nav>

        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
                className="fixed right-0 top-0 w-72 h-screen bg-gray-900 text-white p-8 z-40"
            >
                <div className="flex flex-col space-y-6 mt-20">
                {links.map((link) => (
                    <a
                    key={link}
                    href={`#${link}`}
                    className="capitalize text-lg hover:text-yellow-400"
                    onClick={() => setIsOpen(false)}
                    >
                    {link}
                    </a>
                ))}
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </>
    )
}