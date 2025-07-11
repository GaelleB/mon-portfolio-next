import React from 'react'
import './globals.css'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Section Hero pour tester */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-[var(--color-ny-dark)] text-[var(--color-text-light)] px-6">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[var(--color-taxi)] via-white to-[var(--color-taxi-hover)] bg-clip-text text-transparent">
                Gaëlle Boucher
              </span>
            </h1>
            <p className="text-2xl text-gray-300">
              Développeuse front-end
            </p>
          </div>
        </section>
        
        {/* Section pour tester le scroll */}
        
      </main>
    </>
  )
}