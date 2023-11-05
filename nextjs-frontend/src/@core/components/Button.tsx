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
      className={`px-[${theme.spacing.lg}] bg-[${theme.palette.primary}]`}
      //   style={{ backgroundColor: theme.palette.primary, color: 'white' }}
    >
      {label}
    </button>
  )
}

export default Button
