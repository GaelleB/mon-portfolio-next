'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    
    // Textes qui changent toutes les 3 secondes
    const rotatingTexts = [
        "Frontend Developer",
        "React/Next Developer", 
        "Web Developer",
        "Creative Coder",
        "Digital Artist"
    ];
    
    // Parallax effect
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    
    // Transform values for parallax - objects stay fixed, only background moves
    const objectsY = "0%"; // Objects stay completely fixed
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Animation automatique du texte toutes les 3 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => 
                (prevIndex + 1) % rotatingTexts.length
            );
        }, 3000);

        return () => clearInterval(interval);
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
                    {/* Première série */}
                    <h1 className="text-[240px] text-black leading-none tracking-tighter select-none mr-20" style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontWeight: 900 }}>
                        GAËLLE
                    </h1>
                    <h1 className="text-[240px] text-black leading-none tracking-tighter select-none mr-20" style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontWeight: 900 }}>
                        BOUCHER
                    </h1>
                    <h1 className="text-[240px] text-black leading-none tracking-tighter select-none mr-20" style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontWeight: 900 }}>
                        GAËLLE
                    </h1>
                    <h1 className="text-[240px] text-black leading-none tracking-tighter select-none mr-20" style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontWeight: 900 }}>
                        BOUCHER
                    </h1>
                    <h1 className="text-[240px] text-black leading-none tracking-tighter select-none mr-20" style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontWeight: 900 }}>
                        GAËLLE
                    </h1>
                    <h1 className="text-[240px] text-black leading-none tracking-tighter select-none mr-20" style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontWeight: 900 }}>
                        BOUCHER
                    </h1>
                    
                    {/* Deuxième série identique pour continuité */}
                    <h1 className="text-[240px] text-black leading-none tracking-tighter select-none mr-20" style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontWeight: 900 }}>
                        GAËLLE
                    </h1>
                    <h1 className="text-[240px] text-black leading-none tracking-tighter select-none mr-20" style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontWeight: 900 }}>
                        BOUCHER
                    </h1>
                    <h1 className="text-[240px] text-black leading-none tracking-tighter select-none mr-20" style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontWeight: 900 }}>
                        GAËLLE
                    </h1>
                    <h1 className="text-[240px] text-black leading-none tracking-tighter select-none mr-20" style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontWeight: 900 }}>
                        BOUCHER
                    </h1>
                    <h1 className="text-[240px] text-black leading-none tracking-tighter select-none mr-20" style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontWeight: 900 }}>
                        GAËLLE
                    </h1>
                    <h1 className="text-[240px] text-black leading-none tracking-tighter select-none mr-20" style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontWeight: 900 }}>
                        BOUCHER
                    </h1>
                </motion.div>
            </div>

            {/* Objets 3D flottants avec parallax */}
            <motion.div style={{ y: objectsY }}>
                
                {/* Pyramide orange (top-left) */}
                <motion.div 
                    className="absolute top-30 left-115 w-70 h-70 z-20"
                    style={{ transform: 'rotate(180deg)' }}
                    animate={{
                        y: [0, -8, -5, -10, 0],
                        x: [0, 3, -2, 4, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Image 
                        src="/assets/3d/pyramid.webp"
                        alt=""
                        width={400}
                        height={400}
                        className="w-full h-full object-contain drop-shadow-lg"
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'translateZ(0)'
                        }}
                    />
                </motion.div>

                {/* Sphère violette (left) */}
                <motion.div 
                    className="absolute left-100 top-80 w-70 h-70 z-20"
                    animate={{
                        y: [0, -6, -3, -8, -4, 0],
                        x: [0, 5, -3, 6, -4, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: -1
                    }}
                >
                    <Image 
                        src="/assets/3d/sphere.webp"
                        alt=""
                        width={300}
                        height={300}
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* Cylindre bleu (bottom-left) */}
                <motion.div 
                    className="absolute bottom-20 left-120 w-60 h-90 z-20"
                    style={{ transform: 'scaleX(-1)' }}
                    animate={{
                        y: [0, -7, -3, -6, 0],
                        x: [0, -3, 5, -2, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: -0.5
                    }}
                >
                    <Image 
                        src="/assets/3d/cylinder.webp"
                        alt=""
                        width={240}
                        height={360}
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* Étoile turquoise (top-right) */}
                <motion.div 
                    className="absolute top-30 right-115 w-75 h-75 z-20"
                    animate={{
                        y: [0, -6, -12, -6, -9, 0],
                        rotate: [0, 8, 5, 12, 3, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: -2
                    }}
                >
                    <Image 
                        src="/assets/3d/star.webp"
                        alt=""
                        width={300}
                        height={300}
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* Cube vert/jaune (right) */}
                <motion.div 
                    className="absolute right-100 top-80 w-70 h-70 z-20"
                    animate={{
                        y: [0, -5, -8, -6, 0],
                        x: [0, 3, -4, 2, 0],
                    }}
                    transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: -3
                    }}
                >
                    <Image 
                        src="/assets/3d/cube-green.webp"
                        alt=""
                        width={250}
                        height={250}
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* Cube jaune (bottom-right) */}
                <motion.div 
                    className="absolute bottom-25 right-120 w-70 h-70 z-20"
                    animate={{
                        y: [0, -9, -4, -12, -5, 0],
                        rotate: [4, 10, 15, 8, 16, 4],
                    }}
                    transition={{
                        duration: 6.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: -1.5
                    }}
                >
                    <Image 
                        src="/assets/3d/cube-yellow.webp"
                        alt=""
                        width={260}
                        height={260}
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>

            </motion.div>

            {/* Contenu central avec parallax */}
            <motion.div 
                className="relative z-30 text-center max-w-lg mx-auto px-6 -translate-y-5"
                style={{ y: textY }}
            >
                
                {/* Salutation et nom */}
                <div className={`mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                    <h2 className="text-gray-900 mb-2" style={{ fontSize: '56px' }}>
                        <span style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontWeight: 500 }}>Hi, I&apos;m </span>
                        <em className="italic" style={{ fontFamily: '"PT Serif", "PT Serif Placeholder", serif', fontSize: '48px', fontWeight: 700 }}>Gaëlle</em>
                        <span style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontWeight: 500 }}>!</span>
                    </h2>
                    <motion.p 
                        key={currentTextIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-600" 
                        style={{ 
                            fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', 
                            fontSize: '20px',
                            fontWeight: 400,
                            lineHeight: '24px'
                        }}
                    >
                        {rotatingTexts[currentTextIndex]}
                    </motion.p>
                </div>

                {/* Photo de profil avec effet flip 3D */}
                <motion.div 
                    className={`mb-10 relative w-65 h-65 mx-auto group [perspective:1000px] transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}`} 
                    style={{ transitionDelay: '400ms' }}
                >
                    <motion.div
                        className="relative w-full h-full transition-transform duration-700 flip-card"
                        style={{ 
                            transformStyle: 'preserve-3d',
                            transform: 'perspective(1000px) rotateX(4deg) rotateY(5deg) rotateZ(0deg)'
                        }}
                    >
                        {/* FACE AVANT */}
                        <div className="absolute w-full h-full rounded-3xl overflow-hidden shadow-2xl" style={{ 
                            backfaceVisibility: 'hidden',
                            background: '#6366f1'
                        }}>
                            <div className="relative w-full h-full rounded-3xl overflow-hidden">
                                <Image 
                                    src="/assets/gaelle.png" 
                                    alt="Gaëlle Boucher" 
                                    className="w-full h-full rounded-3xl"
                                    style={{ 
                                        display: 'block',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 'inherit',
                                        objectPosition: '47.9% 24.1%',
                                        objectFit: 'cover'
                                    }}
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>

                        {/* FACE ARRIÈRE */}
                        <div className="absolute w-full h-full rounded-3xl bg-white/80 backdrop-blur-sm flex items-center justify-center [transform:rotateY(180deg)] shadow-2xl" style={{ backfaceVisibility: 'hidden' }}>
                            
                            {/* Cercle extérieur avec bordure */}
                            <div className="relative w-44 h-44 rounded-full bg-white flex items-center justify-center border-2 border-black">
                                
                                {/* Texte rotatif */}
                                <motion.div
                                    animate={{ rotate: 360 }}
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
                                                d="M 88,88 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                                            />
                                        </defs>
                                        <text className="text-lg font-medium black justify-center uppercase tracking-widest">
                                            <textPath href="#textPath" startOffset="0%">
                                                • SCROLL DOWN • AND KNOW ME BETTER 
                                            </textPath>
                                        </text>
                                    </svg>
                                </motion.div>
                                
                                {/* Cercle intérieur avec bordure */}
                                <div className="w-25 h-25 rounded-full bg-white flex items-center justify-center border-2 border-black" >
                                    <motion.div
                                        animate={{ y: [0, 6, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <svg 
                                            className="w-5 h-5 text-gray-600" 
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

                {/* Social proof */}
                <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
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
                <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
                    <div className="group inline-flex items-center bg-white border-[5px] rounded-[48px] h-[72px] overflow-hidden transition-all duration-300 cursor-pointer" style={{ borderColor: '#EFF0FF', fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontSize: '24px', fontWeight: 700 }}>
                        <span className="inline-block px-[48px] py-[24px] text-black transition-all duration-300 group-hover:pr-[24px] group-hover:pl-[48px]">
                            Let&apos;s Work Together!
                        </span>
                        <span className="inline-flex items-center justify-center bg-black text-white min-h-[65px] min-w-[65px] h-[65px] w-[65px] rounded-full -mr-[72px] transition-all duration-300 text-[26px] group-hover:mr-0 group-hover:[transform:rotate(-360deg)]" style={{ aspectRatio: '1/1', flexShrink: 0 }}>
                            ↓
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}