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
    
    // Transform values for parallax
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const objectsY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        
            {/* Texte énorme en arrière-plan avec défilement et parallax */}
            <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
                style={{ y: backgroundY }}
            >
                <motion.div 
                    className="flex whitespace-nowrap"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <h1 className="text-[5rem] md:text-[8rem] lg:text-[12rem] xl:text-[18rem] font-black text-black leading-none tracking-tighter select-none mr-20">
                        GAËLLE
                    </h1>
                    <h1 className="text-[5rem] md:text-[8rem] lg:text-[12rem] xl:text-[18rem] font-black text-black leading-none tracking-tighter select-none mr-20">
                        BOUCHER
                    </h1>
                    <h1 className="text-[5rem] md:text-[8rem] lg:text-[12rem] xl:text-[18rem] font-black text-black leading-none tracking-tighter select-none mr-20">
                        GAËLLE
                    </h1>
                </motion.div>
            </motion.div>

            {/* Objets 3D flottants avec parallax */}
            <motion.div style={{ y: objectsY }}>
                
                {/* Pyramide orange (top-left) */}
                <motion.div 
                    className="absolute top-25 left-130 w-50 h-50 z-20"
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
                        width={96}
                        height={96}
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* Sphère violette (left) */}
                <motion.div 
                    className="absolute left-120 top-90 w-50 h-50 z-20"
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
                        width={80}
                        height={80}
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* Cylindre bleu (bottom-left) */}
                <motion.div 
                    className="absolute bottom-32 left-150 w-50 h-50 z-20"
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
                        width={80}
                        height={128}
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* Étoile turquoise (top-right) */}
                <motion.div 
                    className="absolute top-30 right-120 w-50 h-50 z-20"
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
                        width={96}
                        height={96}
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* Cube vert/jaune (right) */}
                <motion.div 
                    className="absolute right-120 top-90 w-50 h-50 z-20"
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
                        width={72}
                        height={72}
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* Cube jaune (bottom-right) */}
                <motion.div 
                    className="absolute bottom-30 right-140 w-50 h-50 z-20"
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
                        width={80}
                        height={80}
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

                {/* CTA Button avec effet CodePen */}
                <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
                    <button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-gray-900 bg-white border border-gray-200 rounded-full shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:bg-gray-50">
                        
                        {/* Arrière-plan animé */}
                        <span className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out group-hover:w-full"></span>
                        
                        {/* Contenu */}
                        <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                            Let&apos;s Work Together!
                            
                            {/* Flèche avec animation continue */}
                            <motion.div
                                animate={{ x: [0, 6, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <svg 
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                                    />
                                </svg>
                            </motion.div>
                        </span>
                    </button>
                </div>
            </motion.div>
        </section>
    );
}