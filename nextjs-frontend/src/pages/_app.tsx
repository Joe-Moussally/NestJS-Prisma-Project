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

// ** Custom Component Imports
import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={`${outfit.className} border-red-200  flex`}>
        <div className='w-[80vw] ml-auto mr-auto max-w-[1100px] md:w-[95vw]'>
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  )
}
