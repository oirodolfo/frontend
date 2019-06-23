import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import App, { Container } from 'next/app'
import { createGlobalStyle } from 'styled-components'
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
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
