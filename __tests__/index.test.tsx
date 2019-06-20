import React from 'react'
import renderer from 'react-test-renderer'
import User from '../pages/user'
import { Index } from '../pages/index'
import withApollo from '../lib/apollo'

it('Random pages renders correctly', () => {
  const tree = renderer.create(<User id="Ivan" />).toJSON()
  expect(tree).toMatchSnapshot()
})

/* it('Renders index page with apollo HOC', () => {
  const tree = renderer.create(withApollo(Index)).toJSON()
  expect(tree).toMatchSnapshot()
})
 */
