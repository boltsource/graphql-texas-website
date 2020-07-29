import { AppProps } from 'next/app'
import Router from 'next/router'
import React from 'react'

import analytics from '@lib/analytics'

import '@styles/tailwind.css'
import '@styles/main.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    if (!window.ga) analytics.init()
    const handleRouteChange = () => analytics.logPageView()

    handleRouteChange()
    Router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />
}

export default App
