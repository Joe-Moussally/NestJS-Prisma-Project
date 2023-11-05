// ** React Imports
import React, { useEffect, useState } from 'react'

// ** Constants Imports
import { categoryIcons } from '@/@core/constants/category-icons'

// ** Component Imports
import Shimmer from '@/@core/components/Shimmer'
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

  const renderShimmer = () => (
    <div className='flex flex-wrap  gap-5'>
      <Shimmer height='120px' width='120px' borderRadius='12px' />
      <Shimmer height='120px' width='120px' borderRadius='12px' />
      <Shimmer height='120px' width='120px' borderRadius='12px' />
      <Shimmer height='120px' width='120px' borderRadius='12px' />
    </div>
  )

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className='mb-40'>
      <SectionTitle label='- The Categories' />
      <Title>Browse by Category</Title>
      {loading ? (
        renderShimmer()
      ) : (
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
      )}
    </div>
  )
}

export default Categories
