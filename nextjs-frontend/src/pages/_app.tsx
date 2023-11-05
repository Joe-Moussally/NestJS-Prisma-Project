// ** Styles Imports
import '@/styles/globals.css'

// ** Next Imports
import type { AppProps } from 'next/app'

// ** Redux Imports
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
