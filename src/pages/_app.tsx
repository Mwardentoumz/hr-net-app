import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor } from '../utils/store'




export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component key={router.pathname} {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
