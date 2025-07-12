'use client'

import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-gray-950 text-white">
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold mb-12"
                >
                Contact
                </motion.h2>

                <p className="text-lg text-gray-300 mb-8">
                Une idée ? Un projet ? Une série à me recommander ? Écris-moi !
                </p>

                <a
                href="mailto:contact@gaelleb.dev"
                className="inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition"
                >
                Me contacter
                </a>
            </div>
        </section>
    )
}