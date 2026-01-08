// Type pour un item de navigation
export type NavItem = {
    name: string;
    href: string;
};

// Items de navigation
export const navItems: NavItem[] = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' }
];
