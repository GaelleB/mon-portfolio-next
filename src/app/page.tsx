import React from 'react'
import './globals.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

export default function Home() {
  return (
    <>
      <Navigation activeSection={''} />
      <Hero />
    </>
  )
}