// ** React Imports
import React, { useEffect, useState } from 'react'

// ** Constants Imports
import { categoryIcons } from '@/@core/constants/category-icons'

// ** Component Imports
import Title from '@/@core/components/Title/Title'
import CategoryButton from '@/components/CategoryButton/CategoryButton'
import SectionTitle from '@/@core/components/SectionTitle/SectionTitle'

// ** API Imports
import { NEST_API } from '@/@core/utils/api'

function Categories() {
  // ** States
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  // ** Handlers
  const fetchCategories = () => {
    setLoading(true) // Start loading
    NEST_API.get('/categories')
      .then(res => {
        setData(res.data)
      })
      .catch(e => {}) // Handle Error
      .finally(() => setLoading(false)) // Stop loading
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div>
      <SectionTitle label='- The Categories' />
      <Title>Browse by Category</Title>
      <div className='flex flex-wrap  gap-5'>
        {data &&
          data.map(category => (
            <CategoryButton
              key={category.name}
              label={category.name}
              icon={categoryIcons.find(el => el.name === category.name)?.icon()}
            />
          ))}
      </div>
    </div>
  )
}

export default Categories
