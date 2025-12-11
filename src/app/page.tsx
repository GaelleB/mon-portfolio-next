import React from 'react'
import './globals.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
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
    </main>
  )
}