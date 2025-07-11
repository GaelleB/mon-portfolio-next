import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gaëlle Boucher - Front-End Developer | NYC Inspired Portfolio',
  description: 'Portfolio de Gaëlle Boucher, développeuse front-end passionnée, inspirée par l\'énergie de New York City',
  keywords: 'développeur front-end, React, Next.js, TypeScript, portfolio, NYC',
  openGraph: {
    title: 'Gaëlle Boucher - Front-End Developer',
    description: 'Building digital experiences from the city that never sleeps',
    type: 'website',
  }
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