'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    
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

    return (
        <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        
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
                    <h1 className="text-[240px] font-black text-black leading-none tracking-tighter select-none mr-20">
                        GAËLLE
                    </h1>
                    <h1 className="text-[240px] font-black text-black leading-none tracking-tighter select-none mr-20">
                        BOUCHER
                    </h1>
                    <h1 className="text-[240px] font-black text-black leading-none tracking-tighter select-none mr-20">
                        GAËLLE
                    </h1>
                    <h1 className="text-[240px] font-black text-black leading-none tracking-tighter select-none mr-20">
                        BOUCHER
                    </h1>
                    <h1 className="text-[240px] font-black text-black leading-none tracking-tighter select-none mr-20">
                        GAËLLE
                    </h1>
                    <h1 className="text-[240px] font-black text-black leading-none tracking-tighter select-none mr-20">
                        BOUCHER
                    </h1>
                    
                    {/* Deuxième série identique pour continuité */}
                    <h1 className="text-[240px] font-black text-black leading-none tracking-tighter select-none mr-20">
                        GAËLLE
                    </h1>
                    <h1 className="text-[240px] font-black text-black leading-none tracking-tighter select-none mr-20">
                        BOUCHER
                    </h1>
                    <h1 className="text-[240px] font-black text-black leading-none tracking-tighter select-none mr-20">
                        GAËLLE
                    </h1>
                    <h1 className="text-[240px] font-black text-black leading-none tracking-tighter select-none mr-20">
                        BOUCHER
                    </h1>
                    <h1 className="text-[240px] font-black text-black leading-none tracking-tighter select-none mr-20">
                        GAËLLE
                    </h1>
                    <h1 className="text-[240px] font-black text-black leading-none tracking-tighter select-none mr-20">
                        BOUCHER
                    </h1>
                </motion.div>
            </div>

            {/* Objets 3D flottants avec parallax */}
            <motion.div style={{ y: objectsY }}>
                
                {/* Pyramide orange (top-left) */}
                <motion.div 
                    className="absolute top-25 left-130 w-100 h-100 z-20"
                    animate={{
                        y: [0, -25, -15, -30, 0],
                        x: [0, 8, -5, 12, 0],
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
                    className="absolute left-120 top-90 w-75 h-75 z-20"
                    animate={{
                        y: [0, -18, -8, -25, -12, 0],
                        x: [0, 15, -8, 20, -12, 0],
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
                    className="absolute bottom-32 left-150 w-60 h-90 z-20"
                    animate={{
                        y: [0, -22, -8, -18, 0],
                        x: [0, -10, 15, -5, 0],
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
                    className="absolute top-30 right-120 w-75 h-75 z-20"
                    animate={{
                        y: [0, -20, -35, -18, -28, 0],
                        rotate: [0, 25, 15, 35, 10, 0],
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
                    className="absolute right-120 top-90 w-62 h-62 z-20"
                    animate={{
                        y: [0, -15, -25, -18, 0],
                        x: [0, 8, -12, 5, 0],
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
                    className="absolute bottom-30 right-140 w-65 h-65 z-20"
                    animate={{
                        y: [0, -28, -12, -35, -15, 0],
                        rotate: [12, 30, 45, 25, 50, 12],
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
                className="relative z-30 text-center max-w-lg mx-auto px-6"
                style={{ y: textY }}
            >
                
                {/* Salutation et nom */}
                <div className={`mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                        Hi, I&apos;m <em className="font-bold not-italic">Gaëlle</em>!
                    </h2>
                    <p className="text-lg text-gray-600">
                        Frontend Developer
                    </p>
                </div>

                {/* Photo de profil avec effet flip 3D */}
                <motion.div 
                    className={`mb-6 relative w-75 h-75 mx-auto group [perspective:1000px] transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}`} 
                    style={{ transitionDelay: '400ms' }}
                >
                    <motion.div
                        className="relative w-full h-full transition-transform duration-700 flip-card"
                        style={{ 
                            transformStyle: 'preserve-3d',
                            transform: 'perspective(1000px) rotateX(10deg) rotateY(15deg) rotateZ(0deg)'
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
                    <div className="cta-button group inline-block border-4 border-gray-300 rounded-full text-lg font-bold h-15 leading-15 overflow-hidden transition-all duration-300 cursor-pointer hover:border-gray-400">
                        <span className="cta-text inline-block px-8 py-0 transition-all duration-300 group-hover:pr-4">
                            Let&apos;s Work Together!
                        </span>
                        <span className="cta-arrow inline-block bg-black text-white h-15 w-15 text-center rounded-full -mr-15 transition-all duration-300 text-xl leading-15 group-hover:mr-0 group-hover:[transform:rotate(-360deg)]">
                            <motion.div
                                animate={{ x: [0, 6, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="inline-block"
                            >
                                ↓
                            </motion.div>
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}