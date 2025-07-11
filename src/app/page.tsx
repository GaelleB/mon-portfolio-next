import React from 'react'
import './globals.css'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Section Hero pour tester */}
        <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-gray-900 to-pink-900">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
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