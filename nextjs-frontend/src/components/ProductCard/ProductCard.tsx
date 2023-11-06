// ** React Imports
import React from 'react'

// ** Next Imports
import Image from 'next/image'

// ** Props Imports
import { ProductCardProps } from './ProductCardProps'

// ** Custom Hooks Imports
import { useTheme } from '@/hooks/useTheme'

// ** Assets Imports
import productImg from '../../assets/hero.png'

// ** Component Imports
import Box from '@/@core/components/Box/Box'

function ProductCard({
  title = '',
  description = '',
  price = '0',
  quantity = 0,
  categories = [],
  ...rest
}: ProductCardProps) {
  // ** Hooks
  const theme = useTheme()

  return (
    <div className='w-[276px] cursor-pointer'>
      {/* Product Img */}
      <Box className='w-[100%] h-[276px] flex item-center justify-center mb-5' style={{ borderRadius: 45 }}>
        <Image
          className='hover:-mt-20 hover:scale-[1.2] transition-all'
          src={productImg}
          alt=''
          width={200}
          height={200}
          style={{ objectFit: 'contain' }}
        />
      </Box>

      {/* Title */}
      <h2 className='font-medium'>{title}</h2>

      {/* Details */}
      <div className='flex w-[100%]'>
        <div className='flex-[0.5] flex items-center flex-wrap gap-2'>
          {categories.map(category => (
            <Box
              className='text-xs rounded-full w-fit'
              style={{
                padding: '4px 8px',
                // backgroundColor: theme.palette.primary,
                color: theme.palette.primary
              }}
            >
              {category.name}
            </Box>
          ))}
        </div>
        <div className='flex-[0.5] text-base'>
          <span className='text-xs'>{quantity} in stock</span> | ${price}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
