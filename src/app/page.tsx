import React from 'react'
import './globals.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Stack />
      </section>
      <section>
        <Projects />
      </section>
      <Footer />
      
      {/* Footer avec effet de texte coupé */}
      <footer className="relative h-20 overflow-hidden bg-gray-50">
        <div className="absolute bottom-0 left-0 right-0">
          <div className="font-public-sans text-black leading-none tracking-tighter select-none" 
            style={{ 
              fontWeight: 900, 
              fontSize: '165px', 
              lineHeight: '165px',
              transform: 'translateY(50%)',
              width: '100vw',
              textAlign: 'center'
            }}>
            GAËLLE BOUCHER
          </div>
        </div>
      </footer>
    </main>
  )
}