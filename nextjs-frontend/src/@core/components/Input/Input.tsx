// ** React Imports
import React from 'react'

// ** Props Imports
import { InputProps } from '.'

// ** Styles Imports
import styles from './styles.module.css'

// ** Custom Hooks Imports
import { useTheme } from '@/hooks/useTheme'

function Input({ label = '', error = false, errorMessage = '', fullWidth = false, ...rest }: InputProps) {
  // ** Hooks
  const theme = useTheme()

  return (
    <div style={{ width: fullWidth ? '100%' : undefined, ...rest.style }} className='gap-5'>
      {/* Label */}
      <div className='text-sm'>{label}</div>

      {/* Input Field */}
      <div className='my-1'>
        <input
          {...rest}
          className={`bg-transparent focus:border-none focus:outline-none rounded-[2px] text-lg pb-1 ${rest.className} ${styles.input}`}
          style={{ borderBottom: `2px ${theme.palette.text} solid` }}
        />
      </div>

      {/* Error Message  */}
      {error && <div>{errorMessage}</div>}
    </div>
  )
}

export default Input
