// ** React Imports
import React from 'react'

// ** Component Imports
import Hero from './Hero'
import Products from './Products'
import Categories from './Categories'

function Home() {
  return (
    <div className='pb-20'>
      <Hero />
      <Categories />
      <Products />
    </div>
  )
}

export default Home
