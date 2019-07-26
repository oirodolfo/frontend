import React from 'react'
import { create } from 'react-test-renderer'
import User from '../pages/user'
import Register from '../pages/register'

it('Random user page renders correctly', () => {
  const tree = create(<User id="Ivan" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Register page renders correctly', () => {
  const tree = create(<Register />).toJSON()
  expect(tree).toMatchSnapshot()
})
