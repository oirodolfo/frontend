import React from 'react'
import Meta from '../components/Meta'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-boost'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import withApollo from '../lib/apollo'
import theme from '../lib/theme'

declare interface Props {
  apollo: ApolloClient<any>
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${theme.font}, sans-serif;
  }
  html, body, #__next {
    height: 100%
  }
`

class BaseApp extends App<Props> {
  public render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <Container>
        <GlobalStyle />
        <Meta />
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(BaseApp)
