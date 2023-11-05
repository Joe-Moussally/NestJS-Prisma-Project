// ** React Imports
import React from 'react'

// ** Custom Hook Imports
import { useTheme } from '@/hooks/useTheme'

// ** Component Imports
import Hero from './Hero'
import { categoryIcons } from '@/@core/constants/category-icons'

function Home() {
  return (
    <div>
      <Hero />
      {categoryIcons.map(el => el.icon())}
    </div>
  )
}

export default Home
