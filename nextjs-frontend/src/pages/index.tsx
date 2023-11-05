// ** Custom Hook Imports
import { useTheme } from '@/hooks/useTheme'

// ** Fonts Imports
import { Outfit } from 'next/font/google'
const outfit = Outfit({ subsets: ['latin'] })

export default function Home() {
  // ** Hooks
  const theme = useTheme()

  return (
    <main className={`${outfit.className}`} style={{ color: theme.palette.text, background: theme.palette.background }}>
      Home {theme.palette.text}
      <button onClick={() => theme.toggleTheme()}>Change theme</button>
    </main>
  )
}
