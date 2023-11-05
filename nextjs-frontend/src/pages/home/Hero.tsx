// ** React Imports
import React, { useEffect } from 'react'

// ** Hook Imports
import { useTheme } from '@/hooks/useTheme'

// ** Next Imports
import Image from 'next/image'

// ** Assets Imports
import hero from '../../assets/hero.png'

// ** Component Imports
import SectionTitle from '@/@core/components/SectionTitle/SectionTitle'
import Button from '@/@core/components/Button/Button'
import { NEST_API } from '@/@core/utils/api'

function Hero() {
  // ** Hooks
  const theme = useTheme()

  useEffect(() => {
    NEST_API.get('/categories')
  }, [])

  return (
    <div style={{ backgroundColor: theme.palette.background }} className='p-16 rounded-3xl flex justify-between'>
      {/* Left Section */}
      <div className='flex flex-col items-start justify-center '>
        <SectionTitle label='- Healthy Products' />
        <h1 className='text-5xl font-semibold mb-14 mt-5'>
          We Offer The Best <br />
          Products For You.
        </h1>
        <Button label='Shop Now' />
      </div>

      {/* Right Section */}
      <div>
        <Image src={hero} alt='' width={450} height={450} />
      </div>
    </div>
  )
}

export default Hero
