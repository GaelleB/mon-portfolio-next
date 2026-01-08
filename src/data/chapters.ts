// Type pour un chapitre About
export type Chapter = {
    number: string;
    title: string;
    text: string;
    text2: string;
    icon: 'heartbeat' | 'headphones' | 'laptop';
};

// Les 3 chapitres narratifs
export const chapters: Chapter[] = [
    {
        number: "01",
        title: "Avant le code, il y avait le soin",
        text: "J'ai d'abord été auxiliaire de puériculture en néonatalogie. Un métier de silence, de machines et de tout petits humains. Exigeant. Profondément humain.",
        text2: "Ce métier m'a appris l'importance de la structure, du détail, du sens. Chaque geste compte. Chaque élément a sa place. Et puis un jour, j'ai eu envie de transposer cette rigueur ailleurs. Alors j'ai appris à coder.",
        icon: "heartbeat"
    },
    {
        number: "02",
        title: "Les histoires qui me nourrissent",
        text: "Je vis au rythme du clavier, mais aussi de la musique, des séries et des livres.",
        text2: "Les histoires (celles qu'on lit, qu'on entend, qu'on regarde) me nourrissent autant que le design ou le code. Elles sont mon moteur créatif.",
        icon: "headphones"
    },
    {
        number: "03",
        title: "Coder pour raconter",
        text: "Aujourd'hui, je conçois des sites web sur mesure avec React et Next.js. Simples, fluides, et fidèles à ceux qui les portent.",
        text2: "Je ne cherche pas juste à afficher du contenu. Je veux créer des expériences qui te ressemblent et qui servent ton propos.",
        icon: "laptop"
    }
];
