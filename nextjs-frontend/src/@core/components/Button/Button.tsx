// ** React Imports
import React from 'react'

// ** Props Imports
import { ButtonProps } from '.'

// ** Custom Hooks Imports
import { useTheme } from '@/hooks/useTheme'

function Button({ label = '', loading = false, variant = 'solid', ...rest }: ButtonProps) {
  // ** Hooks
  const theme = useTheme()

  return (
    <button
      {...rest}
      style={{ backgroundColor: theme.palette.primary, color: 'white', letterSpacing: 1, ...rest.style }}
      className='px-6 py-3 font-bold text-xl rounded-full'
    >
      {label}
    </button>
  )
}

export default Button
