import { AppProps } from 'next/app'
import React from 'react'

import '@styles/tailwind.css'
import '@styles/main.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
