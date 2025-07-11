import React from 'react'
import './globals.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation activeSection="home" />
      <Hero />
      <About />
      <Skills />
    </main>
  )
}