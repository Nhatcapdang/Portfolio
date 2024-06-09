import '@mantine/core/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { theme } from '../theme'
import { binanceusdm } from 'ccxt'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export const binance = new binanceusdm({
  // options: { defaultType: 'future' },
  // apiKey: 'xWe6TpSXPy5yZLYnDzG71lLDhPCqWafWQS0mL1k6ls79qJzaJpUEGsMJuf59RBSe',
  // secret: 'oWvRMOFTIgo1npEEI74kzx8kLBZI28DYoSgCv2zDZgbaB4f2z3FlqnjAuNKSTYAJ',
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  secret: process.env.NEXT_PUBLIC_API_SECRET,
  urls: { www: 'https://fapi.binance.com' },
  // userAgent: 'ccxt/192.168.80.35',
  verbose: true,
  // uid: 'binance',
})
