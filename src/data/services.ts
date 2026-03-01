export type Service = {
    id: number;
    number: string;
    title: string;
    description: string;
    price: string;
};

export const services: Service[] = [
    {
        id: 1,
        number: '01',
        title: 'Audit éditorial',
        description:
            "J'analyse ton site existant : architecture, parcours de lecture, hiérarchie du contenu. Tu repars avec un diagnostic clair et des recommandations priorisées.",
        price: '490 €',
    },
    {
        id: 2,
        number: '02',
        title: 'Sprint narratif',
        description:
            'Refonte ciblée : homepage, gabarit article, navigation. En 10 jours, ton site retrouve une cohérence éditoriale.',
        price: 'À partir de 2 500 €',
    },
    {
        id: 3,
        number: '03',
        title: 'Site éditorial sur mesure',
        description:
            "Conception et développement complet d'un site narratif. De la structure au code, pensé pour la lecture.",
        price: 'À partir de 8 000 €',
    },
];
