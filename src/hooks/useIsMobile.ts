import { useState, useEffect } from 'react';

/**
 * Hook custom pour détecter si l'écran est en mode mobile
 * @param breakpoint - Largeur en pixels pour considérer l'écran comme mobile (défaut: 768px)
 * @returns boolean - true si l'écran est mobile, false sinon
 */
export function useIsMobile(breakpoint: number = 768): boolean {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Vérification SSR
        if (typeof window === 'undefined') return;

        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        // Check initial
        checkMobile();

        // Écouter les changements de taille
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, [breakpoint]);

    return isMobile;
}
