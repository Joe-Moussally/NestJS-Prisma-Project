// ** React Imports
import React from 'react'

// ** Props Imports
import { SectionTitleProps } from '.'

// ** Hook Imports
import { useTheme } from '@/hooks/useTheme'

function SectionTitle({ label = '' }: SectionTitleProps) {
  // ** Hooks
  const theme = useTheme()
  return (
    <div style={{ color: theme.palette.info }} className='italic text-[19px]'>
      {label}
    </div>
  )
}

export default SectionTitle
