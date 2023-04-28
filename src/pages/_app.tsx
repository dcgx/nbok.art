import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css'
import { ThemeProvider } from 'styled-components'
import DefaultLayout from '../layouts/default'
import GlobalStyle from '../styles/global'
import lightTheme from '../themes/light'
import { Providers } from '../components/Providers'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <ThemeProvider theme={lightTheme}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        <GlobalStyle />
      </ThemeProvider>
    </Providers>
  )
}

export default MyApp
