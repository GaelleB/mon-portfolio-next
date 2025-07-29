'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [cursorVariant, setCursorVariant] = useState('default')
    const [isInContactSection, setIsInContactSection] = useState(false)
    const [hoverText, setHoverText] = useState('Call Me')

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })

            // Vérifier si la souris est dans la zone footer
            const footer = document.querySelector('footer')
            if (footer) {
                const footerRect = footer.getBoundingClientRect()
                const isInFooter = e.clientY >= footerRect.top && 
                                  e.clientY <= footerRect.bottom &&
                                  e.clientX >= footerRect.left && 
                                  e.clientX <= footerRect.right
                
                // Si on entre dans la zone contact, initialiser la position
                if (isInFooter && !isInContactSection) {
                    setMousePosition({
                        x: e.clientX,
                        y: e.clientY
                    })
                }
                
                setIsInContactSection(isInFooter)
            }
        }

        const handleMouseEnter = (e: Event) => {
            const target = e.target as HTMLElement
            const cursorText = target.getAttribute('data-cursor-text')
            
            setIsHovering(true)
            setCursorVariant('button')
            
            if (cursorText) {
                setHoverText(cursorText)
            } else {
                setHoverText('Call Me')
            }
        }

        const handleMouseLeave = () => {
            setIsHovering(false)
            setCursorVariant('default')
            setHoverText('Call Me')
        }

        // Ajouter les écouteurs d'événements pour le mouvement de la souris
        window.addEventListener('mousemove', mouseMove)

        // Ajouter les écouteurs pour les éléments interactifs
        const interactiveElements = document.querySelectorAll('a, button, [data-cursor="pointer"]')
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', handleMouseEnter)
            element.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            window.removeEventListener('mousemove', mouseMove)
            interactiveElements.forEach(element => {
                element.removeEventListener('mouseenter', handleMouseEnter)
                element.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            scale: 1,
            backgroundColor: '#f97316',
            borderRadius: '50%'
        },
        button: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 20,
            scale: 1,
            backgroundColor: '#f97316',
            borderRadius: '20px'
        }
    }

    return (
        <>
            {/* Bille orange qui suit la souris avec délai - seulement dans la section contact */}
            {isInContactSection && (
                <motion.div
                    className="fixed top-0 left-0 pointer-events-none z-[9999]"
                    variants={variants}
                    animate={cursorVariant}
                    initial={{ 
                        x: mousePosition.x - 12,
                        y: mousePosition.y - 12,
                        scale: 0
                    }}
                    transition={{
                        x: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
                        y: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
                        scale: { duration: 0.2, ease: "easeOut" }
                    }}
                    style={{
                        width: isHovering ? '80px' : '24px',
                        height: isHovering ? '40px' : '24px'
                    }}
                >
                    {isHovering && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center justify-center h-full w-full text-white text-sm font-bold"
                        >
                            {hoverText}
                        </motion.div>
                    )}
                </motion.div>
            )}
        </>
    )
}