/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from 'styles/global.styles'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import Analytics from '@Components/atoms/Analytics'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
declare global {
  interface Window {
    gtag?: any
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      window.gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>milhas no alvo</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="A simple project"></meta>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}
