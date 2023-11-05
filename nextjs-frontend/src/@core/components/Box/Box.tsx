// ** React Imports
import React from 'react'

// ** Props Imports
import { BoxProps } from './BoxProps'

// ** Custom Hooks Imports
import { useTheme } from '@/hooks/useTheme'

function Box({ children, ...rest }: BoxProps) {
  // ** Hooks
  const theme = useTheme()

  return (
    <div
      {...rest}
      style={{ ...rest.style, backgroundColor: theme.palette.background, padding: theme.spacing.lg }}
      className={`shadow-xl rounded-2xl ${rest.className}`}
    >
      {children}
    </div>
  )
}

export default Box
