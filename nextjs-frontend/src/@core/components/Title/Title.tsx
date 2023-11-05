// ** React Imports
import React from 'react'

// ** Props Imports
import { TitleProps } from './TitleProps'

function Title({ children = '' }: TitleProps) {
  return <h1 className='text-5xl font-semibold mb-14 mt-5'>{children}</h1>
}

export default Title
