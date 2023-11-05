// ** React Imports
import React from 'react'

// ** Custom Hook Imports
import { useTheme } from '@/hooks/useTheme'

// ** Icon Imports
import { FaPumpSoap } from 'react-icons/fa'
import { FiSun, FiMoon, FiShoppingCart, FiUser } from 'react-icons/fi'

// ** Component Imports
import Button from '@/@core/components/Button/Button'

function Header() {
  // ** Hooks
  const theme = useTheme()
  return (
    <div className='py-10 px-5 flex items-center justify-between fixed w-[100%] backdrop-blur-sm'>
      {/* Brand */}
      <div className='font-bold text-4xl flex' style={{ color: theme.palette.primary }}>
        <FaPumpSoap /> <span>Hygene</span>
      </div>

      {/* Header Actions */}
      <div>
        <Button
          iconButton
          icon={theme.mode === 'light' ? <FiMoon size={26} /> : <FiSun size={26} />}
          onClick={theme.toggleTheme}
        />
        <Button iconButton icon={<FiShoppingCart size={26} />} />
        <Button iconButton icon={<FiUser size={26} />} />
      </div>
    </div>
  )
}

export default Header
