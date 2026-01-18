// Type pour un projet
export type Project = {
    id: number;
    title: string;
    year: string;
    category: string;
    description?: string;
    image: string;
    tech: string[];
    github: string;
    demo?: string;
    featured?: boolean;
};

// Liste des projets
export const projects: Project[] = [
    {
        id: 6,
        title: '8 jours à New York',
        year: 'Janvier 2026',
        category: 'Carnet de voyage',
        description: 'Récit de mon voyage à New York en août 2018. Une immersion de 8 jours dans la ville qui ne dort jamais, racontée jour après jour.',
        image: '/assets/8days-nyc.jpg',
        tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
        github: 'https://github.com/GaelleB/days-in-nyc',
        demo: 'https://days-in-nyc.vercel.app/',
        featured: true
    },
    {
        id: 5,
        title: 'Flag Chronicles',
        year: 'Décembre 2025',
        category: 'Projet éditorial',
        description: 'Carte interactive des États-Unis racontant l\'histoire cachée des drapeaux, capitales et villes principales de chaque État. Un voyage visuel et narratif à travers l\'Amérique.',
        image: '/assets/flag-chronicles.jpg',
        tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
        github: 'https://github.com/GaelleB/flag-chronicles',
        demo: 'https://flag-chronicles.vercel.app/',
        featured: true
    },
    {
        id: 4,
        title: 'Code in the City',
        year: 'Juin 2025',
        category: 'Blog personnel',
        description: 'Mon blog personnel sur New York : séries, musique, lieux de tournage et articles de développement web racontés comme des histoires. Une vitrine de mon univers éditorial.',
        image: '/assets/code-in-the-city.jpg',
        tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
        github: 'https://github.com/GaelleB/code-in-the-city',
        demo: 'https://code-in-the-city.vercel.app/',
        featured: true
    }
];
