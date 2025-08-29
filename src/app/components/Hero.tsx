'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    const isLoaded = true;
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const objectsRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    
    // Textes qui changent toutes les 3 secondes
    const rotatingTexts = [
        "Web Developer",
        "Frontend Developer",
        "React/Next Developer", 
        "Creative Coder",
        "Digital Artist"
    ];
    
    // État du parallaxe pour Framer Motion
    const [parallaxOffset, setParallaxOffset] = useState(0);
    
    // Effet parallaxe React-only - plus de manipulation DOM !
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const displacement = scrollY * -0.3;
            
            // UNIQUEMENT mettre à jour l'état React
            setParallaxOffset(displacement);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // Animation automatique du texte toutes les 3 secondes (avec délai initial)
    useEffect(() => {
        let interval: NodeJS.Timeout;
        
        // Délai de 2 secondes avant de commencer l'animation
        const timeoutId = setTimeout(() => {
            setCurrentTextIndex(1); // Passe au deuxième texte après 2s
            
            interval = setInterval(() => {
                setCurrentTextIndex((prevIndex) => 
                    (prevIndex + 1) % rotatingTexts.length
                );
            }, 3000);
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
            if (interval) clearInterval(interval);
        };
    }, [rotatingTexts.length]);

    return (
        <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
        
            {/* Texte en arrière-plan avec défilement sans parallax */}
            <div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
            >
                <motion.div 
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 120,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {/* Texte qui défile en boucle */}
                    {Array(12).fill(null).map((_, index) => (
                        <div 
                            key={index}
                            className="font-public-sans font-black text-[240px] leading-[288px] text-black tracking-tighter select-none mr-20"
                        >
                            {index % 2 === 0 ? 'GAËLLE' : 'BOUCHER'}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Objets 3D flottants avec parallax */}
            <div ref={objectsRef}>
                
                {/* Pyramide orange (top-left) */}
                <motion.div 
                    className="absolute w-70 h-70 z-20 hero-3d-object"
                    style={{ top: '15%', left: '25%', y: parallaxOffset }}
                    animate={{
                        y: [parallaxOffset, parallaxOffset - 8, parallaxOffset - 5, parallaxOffset - 10, parallaxOffset - 15, parallaxOffset - 8, parallaxOffset],
                        x: [0, 3, -2, 4, 0, -1, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Image 
                        src="/assets/3d/pyramid.webp"
                        alt="Objet 3D décoratif - Pyramide orange flottante"
                        width={400}
                        height={400}
                        className="w-full h-full object-contain"
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'translateZ(0) rotate(12deg)'
                        }}
                    />
                </motion.div>

                {/* Sphère violette (left) */}
                <motion.div 
                    className="absolute w-70 h-70 z-20 hero-3d-object"
                    style={{ top: '37%', left: '20%', y: parallaxOffset }}
                    animate={{
                        y: [parallaxOffset, parallaxOffset - 6, parallaxOffset - 3, parallaxOffset - 8, parallaxOffset - 4, parallaxOffset - 12, parallaxOffset - 6, parallaxOffset],
                        x: [0, 5, -3, 6, -4, 0, 2, 0],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: -3
                    }}
                >
                    <Image 
                        src="/assets/3d/sphere.webp"
                        alt="Objet 3D décoratif - Sphère violette en lévitation"
                        width={300}
                        height={300}
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                {/* Cylindre bleu (bottom-left) */}
                <motion.div 
                    className="absolute w-70 h-90 z-20 hero-3d-object"
                    style={{ bottom: '5%', left: '25%', y: parallaxOffset}}
                    animate={{
                        y: [parallaxOffset, parallaxOffset - 7, parallaxOffset - 3, parallaxOffset - 6, parallaxOffset - 14, parallaxOffset - 9, parallaxOffset],
                        x: [0, -3, 5, -2, 0, 1, 0],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: -6
                    }}
                >
                    <Image 
                        src="/assets/3d/cylinder.webp"
                        alt="Objet 3D décoratif - Cylindre bleu en rotation"
                        width={300}
                        height={360}
                        className="w-full h-full object-contain"
                        style={{
                            transform: 'scaleX(-1)'
                        }}
                    />
                </motion.div>

                {/* Étoile turquoise (top-right) */}
                <motion.div 
                    className="absolute w-70 h-70 z-20 hero-3d-object"
                    style={{ top: '15%', right: '25%', y: parallaxOffset }}
                    animate={{
                        y: [parallaxOffset, parallaxOffset - 6, parallaxOffset - 12, parallaxOffset - 6, parallaxOffset - 9, parallaxOffset - 16, parallaxOffset - 10, parallaxOffset],
                        rotate: [0, 8, 5, 12, 3, 0, -5, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: -9
                    }}
                >
                    <Image 
                        src="/assets/3d/star.webp"
                        alt="Objet 3D décoratif - Étoile turquoise brillante"
                        width={250}
                        height={250}
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                {/* Cube vert/jaune (right) */}
                <motion.div 
                    className="absolute w-70 h-70 z-20 hero-3d-object"
                    style={{ top: '37%', right: '20%', y: parallaxOffset }}
                    animate={{
                        y: [parallaxOffset, parallaxOffset - 5, parallaxOffset - 8, parallaxOffset - 6, parallaxOffset - 13, parallaxOffset - 7, parallaxOffset],
                        x: [0, 3, -4, 2, 0, -2, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: -12
                    }}
                >
                    <Image 
                        src="/assets/3d/cube-green.webp"
                        alt="Objet 3D décoratif - Cube vert et jaune géométrique"
                        width={250}
                        height={250}
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                {/* Cube jaune (bottom-right) */}
                <motion.div 
                    className="absolute w-70 h-70 z-20 hero-3d-object"
                    style={{ bottom: '10%', right: '25%', y: parallaxOffset }}
                    animate={{
                        y: [parallaxOffset, parallaxOffset - 9, parallaxOffset - 4, parallaxOffset - 12, parallaxOffset - 5, parallaxOffset - 17, parallaxOffset - 11, parallaxOffset],
                        rotate: [4, 10, 15, 8, 16, 4, -8, 4],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: -15
                    }}
                >
                    <Image 
                        src="/assets/3d/cube-yellow.webp"
                        alt="Objet 3D décoratif - Cube jaune lumineux en rotation"
                        width={260}
                        height={260}
                        className="w-full h-full object-contain"
                    />
                </motion.div>

            </div>

            {/* Contenu central avec positionnement absolu */}
            <div 
                className="relative z-30 text-center mx-auto"
                style={{ height: '600px', width: '100%' }}
            >
                
                {/* Salutation seule */}
                <motion.div 
                    ref={titleRef}
                    className={`absolute ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
                    style={{ 
                        top: '10px',
                        left: '50.5%',
                        transform: `translateX(-50%) translateY(${parallaxOffset}px)`,
                        opacity: Math.max(1 - (Math.abs(parallaxOffset) / 120), 0)
                    }}
                >
                    <h1 className="font-public-sans font-medium text-black text-5xl leading-[48px]">
                        Hi, I&apos;m <span className="italic font-bold" style={{ fontFamily: '"PT Serif", "PT Serif Placeholder", serif' }}>Gaëlle</span>!
                    </h1>
                </motion.div>

                {/* Texte qui change seul */}
                <motion.div 
                    ref={subtitleRef}
                    className={`absolute ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
                    style={{ 
                        top: '80px',
                        left: '50%',
                        transform: `translateX(-50%) translateY(${parallaxOffset}px)`
                    }}
                >
                    <motion.p 
                        key={currentTextIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="font-public-sans text-xl font-normal leading-6 text-gray-600"
                    >
                        {rotatingTexts[currentTextIndex]}
                    </motion.p>
                </motion.div>

                {/* Bloc Photo + Social proof + CTA */}
                <div 
                    className="profile-block absolute"
                    style={{ 
                        top: '115px',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}
                >
                    {/* Photo de profil avec effet flip 3D */}
                    <motion.div 
                        className={`mb-10 relative w-72 h-72 mx-auto group [perspective:1000px] ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}`} 
                    >
                    {/* Zone de hover invisible élargie */}
                    <motion.div 
                        className="flip-card-hover-zone absolute inset-0 cursor-pointer p-10 -m-10"
                        style={{ 
                            y: parallaxOffset
                        }}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    >
                        <motion.div
                            className="relative w-full h-full flip-card [transform-style:preserve-3d]"
                                variants={{
                                    hover: { rotateY: 185 },
                                    rest: { rotateY: 5 }
                                }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                style={{ 
                                    transform: 'perspective(1000px) rotateX(4deg) rotateZ(0deg)'
                                }}
                            >
                        {/* FACE AVANT */}
                        <div className="absolute w-full h-full rounded-[3rem] overflow-hidden shadow-2xl [backface-visibility:hidden]" style={{ 
                            transform: 'perspective(500px) rotateY(8deg)'
                        }}>
                            <div className="relative w-full h-full rounded-[3rem] overflow-hidden">
                                <Image 
                                    src="/assets/gaelle.jpg" 
                                    alt="Gaëlle Boucher - Développeuse Front-End, photo de profil professionnelle" 
                                    className="block w-full h-full rounded-[inherit] object-cover object-[47.9%_24.1%]"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>

                        {/* FACE ARRIÈRE */}
                        <div className="absolute w-full h-full rounded-[3rem] bg-white/80 backdrop-blur-sm flex items-center justify-center [transform:rotateY(180deg)] shadow-2xl [backface-visibility:hidden]">
                            
                            {/* Cercle extérieur avec bordure */}
                            <div className="relative w-48 h-48 rounded-full bg-white flex items-center justify-center border-2 border-black">
                                
                                {/* Texte rotatif */}
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{
                                        duration: 15,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <svg className="w-full h-full" viewBox="0 0 176 176">
                                        <defs>
                                            <path
                                                id="textPath"
                                                d="M 88,88 m -62,0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                                            />
                                        </defs>
                                        <text className="text-md font-medium black uppercase tracking-wider">
                                            <textPath href="#textPath" startOffset="0%">
                                                • SCROLL&nbsp;&nbsp;DOWN • AND&nbsp;&nbsp;KNOW&nbsp;&nbsp;ME&nbsp;&nbsp;BETTER
                                            </textPath>
                                        </text>
                                    </svg>
                                </motion.div>
                                
                                {/* Cercle intérieur avec bordure */}
                                <div className="w-25 h-25 rounded-full bg-white flex items-center justify-center border-2 border-black" >
                                    <motion.div
                                        animate={{ 
                                            y: [0, -8, 0]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <svg 
                                            className="w-8 h-8 text-gray-600" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                                            />
                                        </svg>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                    {/* Social proof */}
                    <div className={`mb-0 transition-all duration-1000 delay-[600ms] translate-y-[-22px] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex items-center justify-center space-x-2">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full border-2 border-white shadow-lg"></div>
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white shadow-lg"></div>
                                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full border-2 border-white shadow-lg"></div>
                            </div>
                            <span className="text-sm text-gray-600 ml-3 font-medium">5+ projets</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className={`mb-1 transition-all duration-1000 delay-[800ms] translate-y-[10px] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="cta-button-glass font-public-sans">
                            {/* Calque 1 : blur de fond */}
                            <div className="glass-bg-button glass-backdrop" />
                            
                            {/* Calque 2 : contenu blanc par-dessus */}
                            <div className="glass-foreground-button">
                                <span className="cta-button-text-glass">
                                    <span className="hidden md:inline">Let&apos;s Work Together!</span>
                                    <span className="md:hidden">Contact Me</span>
                                </span>
                                <span className="cta-button-icon-glass">
                                    ↓
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}