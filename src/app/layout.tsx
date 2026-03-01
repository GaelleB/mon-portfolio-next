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
  title: 'Gaëlle Boucher - Développeuse web éditoriale | Portfolio',
  description: 'Développeuse web éditoriale spécialisée en sites narratifs : blogs culturels, webzines, projets de contenu. Je conçois et développe des sites qui servent ton message.',
  keywords: 'développeuse web éditoriale, sites éditoriaux, blogs culturels, webzines narratifs, projets de contenu, React, Next.js, TypeScript, développeuse web freelance',
  authors: [{ name: 'Gaëlle Boucher', url: 'https://gaelle-boucher.dev' }],
  creator: 'Gaëlle Boucher',
  publisher: 'Gaëlle Boucher',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://gaelle-boucher.dev'
  },
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: 'Gaëlle Boucher - Développeuse web éditoriale',
    description: 'Développeuse web éditoriale spécialisée en sites narratifs : blogs culturels, webzines, projets de contenu.',
    type: 'website',
    url: 'https://gaelle-boucher.dev',
    locale: 'fr_FR',
    siteName: 'Gaëlle Boucher - Portfolio',
    images: [
      {
        url: 'https://gaelle-boucher.dev/assets/gaelle-new.jpg',
        width: 500,
        height: 500,
        alt: 'Gaëlle Boucher - Développeuse web éditoriale',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaëlle Boucher - Développeuse web éditoriale',
    description: 'Développeuse web éditoriale spécialisée en sites narratifs : blogs culturels, webzines, projets de contenu.',
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