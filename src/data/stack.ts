// Type pour une technologie
export type Tech = {
    name: string;
    icon: string;
    color: string;
};

// Type pour une catégorie de technologies
export type TechCategory = {
    title: string;
    icon: string;
    techs: Tech[];
};

// Organisation des technologies par catégories
export const techCategories: TechCategory[] = [
    {
        title: "Développement",
        icon: "laptop",
        techs: [
            { name: 'React', icon: '/assets/icons/react.svg', color: '#61DAFB' },
            { name: 'TypeScript', icon: '/assets/icons/typescript.svg', color: '#3178C6' },
            { name: 'HTML', icon: '/assets/icons/html.svg', color: '#E34F26' },
            { name: 'CSS', icon: '/assets/icons/css.svg', color: '#1572B6' },
            { name: 'Tailwind', icon: '/assets/icons/tailwindcss.svg', color: '#06B6D4' }
        ]
    },
    {
        title: "Design & Outils",
        icon: "tools",
        techs: [
            { name: 'Figma', icon: '/assets/icons/figma.svg', color: '#F24E1E' },
            { name: 'Git', icon: '/assets/icons/git.svg', color: '#F05032' },
            { name: 'GitHub', icon: '/assets/icons/github.svg', color: '#181717' }
        ]
    },
    {
        title: "IA & Productivité",
        icon: "ai",
        techs: [
            { name: 'ChatGPT', icon: '/assets/icons/chatgpt.svg', color: '#10A37F' },
            { name: 'Claude', icon: '/assets/icons/claude.svg', color: '#D97757' }
        ]
    }
];
