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
            "Ton site existe, mais quelque chose cloche. Les gens ne lisent pas, ne scrollent pas, ne restent pas. Je creuse : structure narrative, hiérarchie des contenus, cohérence éditoriale. En sortie : un diagnostic écrit, des priorités classées, une direction claire.",
        price: '490 €',
    },
    {
        id: 2,
        number: '02',
        title: 'Sprint narratif',
        description:
            "Tu sais ce qui ne va pas. On s'attaque aux pages qui comptent : homepage, gabarit article, navigation. On reconstruit la colonne vertébrale éditoriale du site. Dix jours. Un résultat visible.",
        price: 'À partir de 2 500 €',
    },
    {
        id: 3,
        number: '03',
        title: 'Site éditorial sur mesure',
        description:
            "De zéro à en ligne. Architecture, design, code, pensé pour la lecture et pour durer. Pour ceux qui veulent un site qui a une voix, pas juste une présence.",
        price: 'À partir de 8 000 €',
    },
];
