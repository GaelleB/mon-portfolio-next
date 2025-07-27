import React from 'react'
import './globals.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Stack />
      <Projects />
    </main>
  )
}