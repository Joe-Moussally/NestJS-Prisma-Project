// ** React Imports
import React from 'react'

// ** Props Imports
import { CategoryButtonProps } from './CategoryButtonProps'

// ** Custom Hooks Imports
import { useTheme } from '@/hooks/useTheme'

function CategoryButton({ label = '', icon = null, ...rest }: CategoryButtonProps) {
  // ** Hooks
  const theme = useTheme()

  return (
    <div
      {...rest}
      style={{ backgroundColor: theme.palette.background }}
      className={`rounded-2xl w-[120px] h-[120px] cursor-pointer flex items-center justify-center flex-col gap-2 transition-all hover:-mt-5`}
    >
      <span style={{ color: theme.palette.primary, transform: 'scale(1.15)' }}>{icon}</span>
      <span className='text-[17px] text-center whitespace-normal -mb-4'>{label}</span>
    </div>
  )
}

export default CategoryButton
