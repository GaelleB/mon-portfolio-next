'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="py-12 px-4 bg-gray-100 text-gray-600">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-4"
            >
            <p className="text-gray-600">
                © {new Date().getFullYear()} Gaëlle B. Fait avec Next
            </p>

            <div className="flex justify-center gap-4 mt-6 text-xl">
                <motion.a
                href="mailto:gaelleboucher.dev@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="hover:text-yellow-500"
                >📧</motion.a>
                <motion.a
                href="https://github.com/GaelleB"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="hover:text-yellow-500"
                >💻</motion.a>
                <motion.a
                href="https://www.linkedin.com/in/gaelle-boucher/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="hover:text-yellow-500"
                >👩‍💼</motion.a>
            </div>
            </motion.div>
        </div>
        </footer>
    );
}