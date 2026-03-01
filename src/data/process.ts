export type ProcessStep = {
    id: number;
    number: string;
    title: string;
    description: string;
};

export const processSteps: ProcessStep[] = [
    {
        id: 1,
        number: '01',
        title: 'Appel découverte',
        description:
            'On fait connaissance, tu me parles de ton projet, de tes envies et de tes contraintes. 30 minutes pour voir si on est faits pour travailler ensemble.',
    },
    {
        id: 2,
        number: '02',
        title: 'Diagnostic & brief',
        description:
            "J'analyse ton existant ou ton besoin, et je te propose une direction éditoriale claire : structure, ton, parcours de lecture.",
    },
    {
        id: 3,
        number: '03',
        title: 'Conception & développement',
        description:
            'Je conçois et développe ton site, étape par étape. Tu as de la visibilité à chaque moment clé.',
    },
    {
        id: 4,
        number: '04',
        title: 'Livraison & suivi',
        description:
            "Ton site est en ligne. Je t'accompagne pour la prise en main et reste disponible si tu as besoin d'ajustements.",
    },
];
