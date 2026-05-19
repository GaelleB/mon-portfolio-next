export type ToolGroup = {
    label: string;
    tools: string[];
    description: string;
};

export const toolGroups: ToolGroup[] = [
    {
        label: 'Code',
        tools: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
        description: 'Pour construire des interfaces qui se lisent autant qu\'elles se chargent.'
    },
    {
        label: 'Design',
        tools: ['Figma', 'HTML', 'CSS'],
        description: 'Pour penser la structure et l\'espace avant d\'écrire la première ligne.'
    },
    {
        label: 'Méthode',
        tools: ['Git', 'GitHub', 'Claude', 'ChatGPT'],
        description: 'Pour travailler vite, versionner proprement, ne jamais repartir de zéro.'
    }
];
