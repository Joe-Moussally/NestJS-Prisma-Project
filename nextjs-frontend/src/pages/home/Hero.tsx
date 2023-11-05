// ** React Imports
import React from 'react'

// ** Hook Imports
import { useTheme } from '@/hooks/useTheme'

// ** Next Imports
import Image from 'next/image'

// ** Assets Imports
import hero from '../../assets/hero.png'

// ** Component Imports
import SectionTitle from '@/@core/components/SectionTitle/SectionTitle'
import Button from '@/@core/components/Button/Button'
import Title from '@/@core/components/Title/Title'

function Hero() {
  // ** Hooks
  const theme = useTheme()
  return (
    <div style={{ backgroundColor: theme.palette.background }} className='p-16 rounded-3xl flex justify-between'>
      {/* Left Section */}
      <div className='flex flex-col items-start justify-center '>
        <SectionTitle label='- Healthy Products' />
        <Title>
          We Offer The Best <br />
          Products For You.
        </Title>
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
