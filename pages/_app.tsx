import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import Meta from '../components/Meta'
import App, { Container } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../lib/theme'

declare interface InitialProps {
  Component: NextComponentType
  ctx: NextPageContext
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${theme.font}
  }
  html, body {
    height: 100%
  }
`

class MyApp extends App {
  public static async getInitialProps({ Component, ctx }: InitialProps) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  public render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <GlobalStyle />
        <Meta />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
