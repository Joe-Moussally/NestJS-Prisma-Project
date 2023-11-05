// ** React Imports
import React, { useState } from 'react'

// ** Constants Imports
import { categoryIcons } from '@/@core/constants/category-icons'

// ** Component Imports
import SectionTitle from '@/@core/components/SectionTitle/SectionTitle'

function Categories() {
  // ** States
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  return (
    <div>
      <SectionTitle label='- The Categories' />
      <h1>Browse by Category</h1>
    </div>
  )
}

export default Categories
