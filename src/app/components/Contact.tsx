'use client'

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simuler l'envoi (à remplacer par votre logique d'envoi)
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            setTimeout(() => setShowSuccess(false), 5000);
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            ),
            url: 'https://github.com/gaelleb'
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            ),
            url: 'https://linkedin.com/in/gaelleb'
        },
        {
            name: 'Email',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            url: 'mailto:contact@gaelleb.dev'
        }
    ];

    return (
        <section id="contact" className="py-20 px-4 relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            {/* Background avec effet building */}
            <div className="absolute inset-0 window-grid opacity-5" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold uppercase mb-4">
                        <span className="text-white">Get In</span>{' '}
                        <span className="text-yellow-400">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8" />
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Let&apos;s build something amazing together from the concrete jungle
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-taxi w-full disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                <span className="relative z-10">
                                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                                </span>
                            </motion.button>
                        </form>
                        
                        {/* Success Message */}
                        <AnimatePresence>
                            {showSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="mt-6 p-4 bg-green-500/20 border border-green-500 text-green-400 text-center"
                                >
                                    Message sent successfully! I&apos;ll get back to you soon.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:pl-12"
                    >
                        {/* Info Card */}
                        <div className="manhattan-card p-8 mb-8">
                            <h3 className="text-2xl font-display text-yellow-400 mb-6 uppercase">
                                Let&apos;s Connect
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Whether you have a project in mind, need a developer for your team, 
                                or just want to chat about the latest web technologies over a virtual coffee, 
                                I&apos;m always open to new connections.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-yellow-400/10 rounded flex items-center justify-center">
                                        <span className="text-yellow-400">📍</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="text-gray-300">France (NYC in my dreams)</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-yellow-400/10 rounded flex items-center justify-center">
                                        <span className="text-yellow-400">⏰</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Availability</p>
                                        <p className="text-gray-300">Open to opportunities</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-yellow-400/10 rounded flex items-center justify-center">
                                        <span className="text-yellow-400">💬</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Response Time</p>
                                        <p className="text-gray-300">Within 24-48 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-xl font-display text-white mb-4 uppercase">
                                Find me on
                            </h4>
                            <div className="flex gap-4">
                                {socialLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-gray-900 hover:border-yellow-400 transition-all duration-300"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {link.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* NYC Quote */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 p-6 bg-gray-800/30 border-l-4 border-yellow-400"
                        >
                            <p className="text-lg italic text-gray-300">
                                &quot;The city seen from the Queensboro Bridge is always the city seen for the first time&quot;
                            </p>
                            <cite className="text-sm text-gray-500 mt-2 block">- F. Scott Fitzgerald</cite>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}