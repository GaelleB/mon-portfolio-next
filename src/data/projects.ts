// Type pour un projet
export type Project = {
    id: number;
    title: string;
    year: string;
    category: string;
    description?: string;
    image: string;
    tech: string[];
    demo?: string;
    featured?: boolean;
};

// Liste des projets
export const projects: Project[] = [
    {
        id: 8,
        title: 'The Soul of the Game',
        year: 'Février 2026',
        category: 'Projet personnel',
        description: 'Exploration éditoriale des plus grandes dynasties NBA. Des récits portés par les données qui racontent comment ces équipes ont défini le basketball moderne.',
        image: '/assets/soul-of-the-game.png',
        tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
        demo: 'https://the-soul-of-the-game.vercel.app/',
        featured: true
    },
    {
        id: 7,
        title: 'Anatomy of',
        year: 'Janvier 2026',
        category: 'Projet personnel',
        description: 'Série d\'analyses interactives décortiquant l\'excellence éditoriale des meilleurs sites web. Quatre études de cas approfondies (NYT Graphics, The Pudding, Stripe Press, Criterion Channel) qui extraient les leçons clés du design éditorial.',
        image: '/assets/anatomy-of.png',
        tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
        demo: 'https://anatomy-of.vercel.app/',
        featured: true
    },
    {
        id: 6,
        title: '8 jours à New York',
        year: 'Janvier 2026',
        category: 'Projet personnel',
        description: 'Récit de mon voyage à New York en août 2018. Une immersion de 8 jours dans la ville qui ne dort jamais, racontée jour après jour.',
        image: '/assets/8days-nyc.jpg',
        tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
        demo: 'https://days-in-nyc.vercel.app/',
        featured: true
    },
    {
        id: 5,
        title: 'Flag Chronicles',
        year: 'Décembre 2025',
        category: 'Projet personnel',
        description: 'Carte interactive des États-Unis racontant l\'histoire cachée des drapeaux, capitales et villes principales de chaque État. Un voyage visuel et narratif à travers l\'Amérique.',
        image: '/assets/flag-chronicles.jpg',
        tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
        demo: 'https://flag-chronicles.vercel.app/',
        featured: true
    },
    {
        id: 4,
        title: 'Code in the City',
        year: 'Juin 2025',
        category: 'Projet personnel',
        description: 'Mon blog personnel sur New York : séries, musique, lieux de tournage et articles de développement web racontés comme des histoires. Une vitrine de mon univers éditorial.',
        image: '/assets/code-in-the-city.jpg',
        tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
        demo: 'https://code-in-the-city.vercel.app/',
        featured: true
    }
];
