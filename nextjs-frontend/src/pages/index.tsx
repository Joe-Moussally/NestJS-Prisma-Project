// ** Custom Hook Imports
import { useTheme } from '@/hooks/useTheme'

export default function Home() {
  // ** Hooks
  const theme = useTheme()

  return (
    <main style={{ color: theme.palette.text, background: theme.palette.background }}>
      Home
      <button onClick={() => theme.toggleTheme()}>Change theme</button>
    </main>
  )
}
