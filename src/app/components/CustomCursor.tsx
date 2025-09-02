'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [cursorVariant, setCursorVariant] = useState('default')
    const [isInInteractiveZone, setIsInInteractiveZone] = useState(false)
    const [hoverText, setHoverText] = useState('Call Me')
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })

            // Vérifier si on est sur une page interactive ou dans le footer
            const is404Page = window.location.pathname === '/not-found' || window.location.pathname.includes('404')
            const isLicensingPage = window.location.pathname === '/licensing'
            
            let isInFooter = false
            const footer = document.querySelector('footer')
            if (footer) {
                const footerRect = footer.getBoundingClientRect()
                isInFooter = e.clientY >= footerRect.top && 
                            e.clientY <= footerRect.bottom &&
                            e.clientX >= footerRect.left && 
                            e.clientX <= footerRect.right
            }
            
            const shouldShowCursor = isInFooter || is404Page || isLicensingPage
            
            // Réinitialiser si on quitte toutes les zones interactives
            if (!shouldShowCursor && isInInteractiveZone) {
                // Annuler tout délai en cours
                if (hoverTimeout) {
                    clearTimeout(hoverTimeout)
                    setHoverTimeout(null)
                }
                setIsHovering(false)
                setCursorVariant('default')
                setHoverText('Call Me')
            }
            
            setIsInInteractiveZone(shouldShowCursor)
        }

        const handleMouseEnter = (e: Event) => {
            const target = e.target as HTMLElement
            const cursorText = target.getAttribute('data-cursor-text')
            
            // Annule le timeout si on entre sur un autre lien
            if (hoverTimeout) {
                clearTimeout(hoverTimeout)
                setHoverTimeout(null)
            }
            
            setIsHovering(true)
            setCursorVariant('button')
            
            if (cursorText) {
                setHoverText(cursorText)
            } else {
                setHoverText('Call Me')
            }
        }

        const handleMouseLeave = (e: Event) => {
            // Vérifie si on va vers un autre élément avec data-cursor-text
            const relatedTarget = (e as MouseEvent).relatedTarget as HTMLElement
            const isGoingToAnotherLink = relatedTarget?.closest('[data-cursor-text]')
            
            if (!isGoingToAnotherLink) {
                // Délai seulement si on ne va PAS vers un autre lien
                const timeoutId = setTimeout(() => {
                    setIsHovering(false)
                    setCursorVariant('default')
                    setHoverText('Call Me')
                }, 150)
                setHoverTimeout(timeoutId)
            }
        }

        // Ajouter les écouteurs d'événements pour le mouvement de la souris
        window.addEventListener('mousemove', mouseMove)

        // Ajouter les écouteurs pour les éléments interactifs
        const interactiveElements = document.querySelectorAll('[data-cursor-text]')
        
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
            // Nettoyer le timeout si le composant se démonte
            if (hoverTimeout) {
                clearTimeout(hoverTimeout)
            }
        }
    }, [hoverTimeout, isHovering, isInInteractiveZone])

    const variants = {
        default: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            scale: 1
        },
        button: {
            x: mousePosition.x + 20,
            y: mousePosition.y - 20,
            scale: 1
        }
    }

    return (
        <>
            {/* Bille orange qui suit la souris avec délai - dans les zones interactives */}
            {isInInteractiveZone && (
                <motion.div
                    className="fixed top-0 left-0 pointer-events-none z-[9999] bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-md"
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
                        width: isHovering ? 'auto' : '24px',
                        height: isHovering ? 'auto' : '24px',
                        borderRadius: isHovering ? '20px' : '12px',
                        minWidth: isHovering ? '80px' : '24px',
                        minHeight: isHovering ? '40px' : '24px',
                        padding: isHovering ? '8px 16px' : '0'
                    }}
                >
                    {isHovering && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center justify-center h-full w-full text-white text-xs sm:text-sm font-medium whitespace-nowrap text-center"
                        >
                            {hoverText}
                        </motion.div>
                    )}
                </motion.div>
            )}
        </>
    )
}