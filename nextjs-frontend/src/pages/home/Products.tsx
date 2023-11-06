// ** React Imports
import React, { useEffect, useState } from 'react'

// ** Component Imports
import Title from '@/@core/components/Title/Title'
import Button from '@/@core/components/Button/Button'
import ProductCard from '@/components/ProductCard/ProductCard'
import SectionTitle from '@/@core/components/SectionTitle/SectionTitle'

// ** API Imports
import { NEST_API } from '@/@core/utils/api'

// ** Icons Imports
import { FaPlus } from 'react-icons/fa'

function Products() {
  // ** States
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, limit: 6 })

  // **Handlers
  const fetchProducts = (page: number, limit: number) => {
    setLoading(true) // Start loading
    console.log(paginationModel)
    NEST_API.get(`/products?page=${page + 1}&limit=${limit}`)
      .then(res => {
        setData(oldData => [...oldData, ...res.data])
      })
      .catch(e => {}) // Handle error
      .finally(() => setLoading(false))
  }

  // Increment page count
  const handlePageIncrement = () => setPaginationModel(prevModel => ({ ...prevModel, page: prevModel.page + 1 }))

  useEffect(() => {
    if (paginationModel.page === 0) {
      // Don't call fetchProducts on the initial render
      return
    }
    fetchProducts(paginationModel.page, paginationModel.limit)
  }, [paginationModel])

  return (
    <div className='mb-40'>
      <SectionTitle label='- Our Products' />
      <Title>Explore our Products</Title>
      <div className='flex flex-wrap items-center gap-20'>
        {data &&
          data.map(product => (
            <ProductCard
              key={product.id}
              title={product.name}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
              categories={product.categories}
            />
          ))}
      </div>

      <div className='my-20 flex items-center justify-center'>
        <Button label='Load More' icon={<FaPlus />} onClick={handlePageIncrement} />
      </div>
    </div>
  )
}

export default Products
