import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gaëlle Boucher - Développeuse Front-End | Portfolio',
  description: 'Portfolio de Gaëlle Boucher, développeuse front-end spécialisée en React et Next.js. Créatrice de sites web sur mesure.',
  keywords: 'développeuse front-end, React, Next.js, TypeScript, portfolio, sites web sur mesure',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://mon-portfolio-next-mu.vercel.app'
  },
  openGraph: {
    title: 'Gaëlle Boucher - Développeuse Front-End',
    description: 'Développeuse front-end spécialisée en React et Next.js. Créatrice de sites web sur mesure.',
    type: 'website',
    url: 'https://mon-portfolio-next-mu.vercel.app',
    locale: 'fr_FR'
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}