import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// Fonts pour le style éditorial
const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap'
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-serif',
  display: 'swap'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-mono',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gaelle-boucher.dev'),
  title: 'Gaëlle Boucher - Développeuse Front-End Projets Éditoriaux | Portfolio',
  description: 'Développeuse front-end spécialisée en projets éditoriaux et culturels. Je crée des sites web sur mesure pour webzines, médias culturels et maisons d\'édition avec React et Next.js.',
  keywords: 'développeuse front-end, projets éditoriaux, webzine, médias culturels, maisons d\'édition, React, Next.js, TypeScript, sites web éditoriaux',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://gaelle-boucher.dev'
  },
  openGraph: {
    title: 'Gaëlle Boucher - Développeuse Front-End Projets Éditoriaux',
    description: 'Je crée des sites web sur mesure pour webzines, médias culturels et maisons d\'édition. Développeuse spécialisée en projets éditoriaux.',
    type: 'website',
    url: 'https://gaelle-boucher.dev',
    locale: 'fr_FR',
    images: [
      {
        url: '/assets/gaelle-new.jpg',
        width: 500,
        height: 500,
        alt: 'Gaëlle Boucher - Développeuse Front-End spécialisée projets éditoriaux'
      }
    ]
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}