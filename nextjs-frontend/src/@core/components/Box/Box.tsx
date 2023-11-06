// ** React Imports
import React from 'react'

// ** Props Imports
import { BoxProps } from './BoxProps'

// ** Custom Hooks Imports
import { useTheme } from '@/hooks/useTheme'

function Box({ children, style = {}, className = '', ...rest }: BoxProps) {
  // ** Hooks
  const theme = useTheme()

  return (
    <div
      {...rest}
      style={{ backgroundColor: theme.palette.background, padding: theme.spacing.lg, ...style }}
      className={className}
    >
      {children}
    </div>
  )
}

export default Box
