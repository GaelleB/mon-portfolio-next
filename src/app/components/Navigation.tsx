'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 w-full px-6 py-4 z-50 backdrop-blur-sm transition-all duration-300 ${
            scrolled ? 'bg-[rgba(30,30,30,0.7)] border-b border-[var(--color-taxi)]' : 'bg-transparent'
        }`}
        >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[var(--color-taxi)] hover:opacity-80 transition"
            >
            Gaëlle Boucher
            </Link>
            <div className="flex gap-6 text-sm uppercase tracking-wider font-semibold">
            <Link
                href="#projects"
                className="btn btn-outline btn-warning text-[var(--color-text-light)] hover:scale-105 transition-transform duration-200"
            >
                Projets
            </Link>
            <Link
                href="#about"
                className="btn btn-outline btn-warning text-[var(--color-text-light)] hover:scale-105 transition-transform duration-200"
            >
                À propos
            </Link>
            <Link
                href="#contact"
                className="btn btn-outline btn-warning text-[var(--color-text-light)] hover:scale-105 transition-transform duration-200"
            >
                Contact
            </Link>
            </div>
        </div>
        </motion.nav>
    );
}