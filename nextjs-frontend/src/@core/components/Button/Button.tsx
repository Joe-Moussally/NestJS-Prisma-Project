// ** React Imports
import React from 'react'

// ** Props Imports
import { ButtonProps } from '.'

// ** Custom Hooks Imports
import { useTheme } from '@/hooks/useTheme'

function Button({
  label = '',
  loading = false,
  variant = 'solid',
  icon = null,
  iconButton = false,
  ...rest
}: ButtonProps) {
  // ** Hooks
  const theme = useTheme()

  return (
    <button
      {...rest}
      style={{
        backgroundColor: iconButton ? 'transparent' : theme.palette.primary,
        color: iconButton ? theme.palette.text : 'white',
        letterSpacing: 0.5,
        ...rest.style
      }}
      className='px-6 py-3 font-semibold text-xl rounded-full'
    >
      {icon}
      {label}
    </button>
  )
}

export default Button
