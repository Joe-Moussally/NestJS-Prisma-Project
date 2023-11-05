// ** Styles Imports
import '@/styles/globals.css'

// ** Next Imports
import type { AppProps } from 'next/app'

// ** Theme Imports
import { useTheme } from '@/hooks/useTheme'

// ** Fonts Imports
import { Outfit } from 'next/font/google'
const outfit = Outfit({ subsets: ['latin'] })

// ** Redux Imports
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <span>Header here</span>
      <div className={`${outfit.className}`}>
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}
