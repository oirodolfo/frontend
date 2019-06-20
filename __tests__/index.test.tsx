import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../pages/index'
import User from '../pages/User'

it('Index renders correctly', () => {
  const tree = renderer.create(<Index />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Random pages renders correctly', () => {
  const tree = renderer.create(<User id="Ivan" />).toJSON()
  expect(tree).toMatchSnapshot()
})
