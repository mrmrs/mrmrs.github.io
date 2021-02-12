import '../styles/globals.css'
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Router from "next/router"
import withGA from  'next-ga'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
}

export default withGA("UA-39529635-1", Router)(MyApp);
