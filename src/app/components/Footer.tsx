'use client'

import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="relative bg-gray-900 border-t border-gray-800">
            {/* Ligne de métro décorative */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <div className="text-4xl font-display font-bold">
                            <span className="text-yellow-400">GB</span>
                        </div>
                    </motion.div>
                    
                    {/* Navigation rapide */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-6 mb-8 text-sm"
                    >
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-400 hover:text-yellow-400 transition-colors uppercase tracking-wider"
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                    
                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-sm"
                    >
                        <p className="mb-2">
                            © {currentYear} Gaëlle Boucher. All rights reserved.
                        </p>
                    </motion.div>
                    
                    {/* NYC Time */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 text-xs text-gray-600 font-mono-custom"
                    >
                        <span className="inline-flex items-center gap-2">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                            NYC TIME: <span id="nyc-time">--:--</span>
                        </span>
                    </motion.div>
                </div>
            </div>
            
            {/* Script pour l'heure NYC */}
            <script dangerouslySetInnerHTML={{
                __html: `
                    function updateNYCTime() {
                        const nyTime = new Date().toLocaleTimeString('en-US', {
                            timeZone: 'America/New_York',
                            hour: '2-digit',
                            minute: '2-digit',
                        });
                        const element = document.getElementById('nyc-time');
                        if (element) element.textContent = nyTime;
                    }
                    updateNYCTime();
                    setInterval(updateNYCTime, 1000);
                `
            }} />
        </footer>
    );
}