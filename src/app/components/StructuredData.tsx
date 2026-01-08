export default function StructuredData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Gaëlle Boucher",
        "url": "https://gaelle-boucher.dev",
        "image": "https://gaelle-boucher.dev/assets/gaelle-new.jpg",
        "jobTitle": "Développeuse Front-End",
        "description": "Développeuse front-end spécialisée en sites éditoriaux : blogs culturels, webzines narratifs, projets de contenu.",
        "knowsAbout": [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Développement Web",
            "Sites Éditoriaux",
            "Projets Culturels"
        ],
        "sameAs": [
            "https://www.linkedin.com/in/gaelle-boucher/",
            "https://github.com/GaelleB",
            "https://www.instagram.com/gaelle_boucher23/",
            "https://medium.com/@gahell911",
            "https://substack.com/@gahell911"
        ],
        "email": "gaelleboucher.dev@gmail.com",
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Gaëlle Boucher - Portfolio",
        "url": "https://gaelle-boucher.dev",
        "description": "Portfolio de Gaëlle Boucher, développeuse front-end spécialisée en projets éditoriaux",
        "author": {
            "@type": "Person",
            "name": "Gaëlle Boucher"
        },
        "inLanguage": "fr-FR"
    };

    const profilePageSchema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "dateCreated": "2025-01-01",
        "dateModified": new Date().toISOString().split('T')[0],
        "mainEntity": {
            "@type": "Person",
            "name": "Gaëlle Boucher",
            "alternateName": "Gaëlle B.",
            "description": "Développeuse front-end spécialisée en sites éditoriaux",
            "image": "https://gaelle-boucher.dev/assets/gaelle-new.jpg"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
            />
        </>
    );
}
