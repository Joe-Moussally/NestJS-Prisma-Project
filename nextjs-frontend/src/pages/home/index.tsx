// ** React Imports
import React from 'react'

// ** Custom Hook Imports
import { useTheme } from '@/hooks/useTheme'

// ** Component Imports
import Hero from './Hero'
import Categories from './Categories'

function Home() {
  return (
    <div>
      <Hero />
      <Categories />
    </div>
  )
}

export default Home
