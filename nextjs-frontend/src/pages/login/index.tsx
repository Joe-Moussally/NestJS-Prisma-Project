// ** React Imports
import React from 'react'

// ** Next Imports
import Link from 'next/link'

// ** Custom Hook Imports
import { useTheme } from '@/hooks/useTheme'

// ** Custom Component Imports
import Box from '@/@core/components/Box/Box'
import Input from '@/@core/components/Input/Input'
import Button from '@/@core/components/Button/Button'

// ** Component Imports

function Login() {
  const theme = useTheme()

  return (
    <div style={{ backgroundColor: theme.palette.primary }} className='h-[100vh] flex items-center justify-center'>
      <Box className='flex flex-col items-center justify-between gap-8 min-w-[400px]'>
        <div className='text-3xl'>Hello!</div>
        <Input fullWidth className='w-[100%]' label='Email' placeholder='example@mail.com' />
        <Input fullWidth className='w-[100%]' label='Password' placeholder='Password' type='password' />
        <Button label='Log In' onClick={theme.toggleTheme} />
        <Link href='/register'>New user?</Link>
      </Box>
    </div>
  )
}

export default Login
