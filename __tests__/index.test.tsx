import React from 'react'
import { create } from 'react-test-renderer'
import { Index } from '../pages/index'
import User from '../pages/user'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-boost'

it('Renders user page correctly', () => {
  const tree = create(<User id="Ivan" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it(`Doesn't fail on receiving Apollo data`, () => {
  const tree = create(
    <ApolloProvider
      client={
        new ApolloClient({
          link: new HttpLink({ uri: 'https://api.komfy.now.sh' }),
          cache: new InMemoryCache()
        })
      }>
      <Index />
    </ApolloProvider>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

it('Shows error text when wrong link', () => {
  const tree = create(
    <ApolloProvider
      client={
        new ApolloClient({
          link: new HttpLink({ uri: 'https://example.com' }),
          cache: new InMemoryCache()
        })
      }>
      <Index />
    </ApolloProvider>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
