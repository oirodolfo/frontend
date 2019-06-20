import React from 'react'
import renderer from 'react-test-renderer'
import User from '../pages/user'

it('Random pages renders correctly', () => {
  const tree = renderer.create(<User id="Ivan" />).toJSON()
  expect(tree).toMatchSnapshot()
})
