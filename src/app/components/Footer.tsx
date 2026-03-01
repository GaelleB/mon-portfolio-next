'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Footer() {
    const isMobile = useIsMobile();

    // Scroll parallax pour le watermark
    const { scrollY } = useScroll();
    const watermarkY = useTransform(scrollY, [0, 1000], [0, -100]);

    return (
        <footer
            id="contact"
            className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-16 overflow-hidden"
            style={{ backgroundColor: '#f5f0e8' }}
        >
            {/* Numérotation éditoriale "05" en arrière-plan */}
            <motion.div
                className="hidden lg:block absolute top-32 left-12 pointer-events-none select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                aria-hidden="true"
            >
                <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="140" fontFamily="monospace" fontWeight="bold" fontSize="180" fill="#f97316" fillOpacity="0.05">07</text>
                </svg>
            </motion.div>

            {/* Watermark typographique "CONTACT" en arrière-plan */}
            <motion.div
                className="absolute pointer-events-none select-none"
                style={{
                    top: isMobile ? '8%' : '12%',
                    right: isMobile ? '5%' : '8%',
                    y: watermarkY
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                aria-hidden="true"
            >
                <svg
                    className="w-[280px] h-[100px] md:w-[450px] md:h-[160px] lg:w-[620px] lg:h-[220px]"
                    viewBox="0 0 800 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <text
                        x="0"
                        y="180"
                        fontFamily="serif"
                        fontWeight="bold"
                        fontSize="220"
                        fill="#f97316"
                        fillOpacity={isMobile ? 0.02 : 0.03}
                        stroke="rgba(249, 115, 22, 0.08)"
                        strokeWidth="1"
                    >
                        CONTACT
                    </text>
                </svg>
            </motion.div>

            {/* Contenu principal */}
            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col min-h-[calc(100vh-13rem)]">

                {/* HEADER ÉDITORIAL */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Surtitre */}
                    <span
                        className="inline-block font-mono text-xs md:text-sm uppercase tracking-wider mb-4"
                        style={{
                            color: '#c2410c',
                            letterSpacing: '0.1em'
                        }}
                    >
                        Contact · Parlons projet
                    </span>

                    {/* Titre principal */}
                    <h2
                        className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl mb-6"
                        style={{
                            color: '#253439',
                            lineHeight: '1.2'
                        }}
                    >
                        Créons ensemble ton prochain site
                    </h2>

                    {/* Chapô */}
                    <p
                        className="font-sans text-base md:text-lg max-w-3xl mx-auto mb-10"
                        style={{
                            color: '#4a4a4a',
                            lineHeight: '1.6'
                        }}
                    >
                        Prêt à donner vie à ton histoire ? Réservons un appel découverte pour en discuter.
                    </p>

                    {/* CTA Principal */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Bouton Calendly */}
                        <motion.a
                            href="https://calendly.com/gaelleboucher-dev/30min?subject=Appel découverte"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 font-sans font-medium text-base rounded-lg transition-all duration-300 w-full sm:w-auto"
                            style={{
                                backgroundColor: '#c2410c',
                                color: '#ffffff'
                            }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0 8px 24px rgba(154, 52, 18, 0.25)'
                            }}
                            whileTap={{ scale: 0.98 }}
                            aria-label="Réserver un appel découverte de 30 minutes sur Calendly (ouvre dans un nouvel onglet)"
                        >
                            Réserver un appel découverte
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </motion.a>

                        {/* Lien email */}
                        <motion.a
                            href="mailto:gaelleboucher.dev@gmail.com"
                            className="inline-flex items-center justify-center font-sans text-base group"
                            style={{ color: '#253439' }}
                            whileHover={{ x: 5 }}
                            aria-label="M'écrire par email à gaelleboucher.dev@gmail.com"
                        >
                            <span className="border-b-2 border-transparent group-hover:border-current transition-all duration-300">
                                Ou écris-moi directement
                            </span>
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* SIGNATURE */}
                <motion.div
                    className="text-center mb-10 mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <span
                        className="block font-serif font-bold text-xl md:text-2xl mb-1"
                        style={{ color: '#253439' }}
                    >
                        Gaëlle B
                    </span>
                    <span
                        className="block font-mono text-xs uppercase tracking-wider"
                        style={{ color: '#c2410c', letterSpacing: '0.1em' }}
                    >
                        Développeuse web éditoriale
                    </span>
                </motion.div>

                {/* ICÔNES SOCIALES */}
                <motion.div
                    className="flex items-center justify-center gap-5 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <a
                        href="https://www.linkedin.com/in/gaelle-boucher/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-[#c2410c]"
                        style={{ color: '#253439' }}
                        aria-label="Mon profil LinkedIn (ouvre dans un nouvel onglet)"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.instagram.com/gaelle_boucher23/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-[#c2410c]"
                        style={{ color: '#253439' }}
                        aria-label="Mon profil Instagram (ouvre dans un nouvel onglet)"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                    </a>
                    <a
                        href="https://medium.com/@gahell911"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-[#c2410c]"
                        style={{ color: '#253439' }}
                        aria-label="Mes articles sur Medium (ouvre dans un nouvel onglet)"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                        </svg>
                    </a>
                    <a
                        href="https://substack.com/@gahell911"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-[#c2410c]"
                        style={{ color: '#253439' }}
                        aria-label="Ma newsletter Substack (ouvre dans un nouvel onglet)"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                        </svg>
                    </a>
                </motion.div>

                {/* SÉPARATEUR + COPYRIGHT */}
                <motion.div
                    className="pt-8 border-t"
                    style={{ borderColor: 'rgba(249, 115, 22, 0.2)' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <p
                            className="font-sans text-sm"
                            style={{ color: '#333333', opacity: 0.7 }}
                        >
                            © 2026 Gaëlle B. Tous droits réservés.
                        </p>
                        <p
                            className="font-sans text-sm"
                            style={{ color: '#333333', opacity: 0.5 }}
                        >
                            Construit avec Next.js, Tailwind CSS & Framer Motion
                        </p>
                    </div>
                </motion.div>

            </div>
        </footer>
    );
}
