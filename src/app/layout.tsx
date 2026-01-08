import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import StructuredData from './components/StructuredData';

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
  description: 'Développeuse front-end spécialisée en sites éditoriaux : blogs culturels, webzines narratifs, projets de contenu. Je crée des expériences web avec React et Next.js.',
  keywords: 'développeuse front-end, sites éditoriaux, blogs culturels, webzines narratifs, projets de contenu, React, Next.js, TypeScript, développeuse web freelance',
  authors: [{ name: 'Gaëlle Boucher', url: 'https://gaelle-boucher.dev' }],
  creator: 'Gaëlle Boucher',
  publisher: 'Gaëlle Boucher',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://gaelle-boucher.dev'
  },
  openGraph: {
    title: 'Gaëlle Boucher - Développeuse Front-End Projets Éditoriaux',
    description: 'Je développe des sites éditoriaux : blogs culturels, webzines narratifs, projets de contenu. Développeuse spécialisée React/Next.js.',
    type: 'website',
    url: 'https://gaelle-boucher.dev',
    locale: 'fr_FR',
    siteName: 'Gaëlle Boucher - Portfolio',
    images: [
      {
        url: 'https://gaelle-boucher.dev/assets/gaelle-new.jpg',
        width: 500,
        height: 500,
        alt: 'Gaëlle Boucher - Développeuse Front-End spécialisée projets éditoriaux',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaëlle Boucher - Développeuse Front-End Projets Éditoriaux',
    description: 'Je développe des sites éditoriaux : blogs culturels, webzines narratifs, projets de contenu avec React/Next.js.',
    images: ['https://gaelle-boucher.dev/assets/gaelle-new.jpg'],
    creator: '@gaelle_boucher23'
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
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}