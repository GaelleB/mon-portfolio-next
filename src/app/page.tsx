import React from 'react'
import './globals.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Stack />
    </main>
  )
}