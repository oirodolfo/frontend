import React from 'react'
import NavBar from '../components/Layout/NavBar'
import Meta from '../components/Meta'
import Head from 'next/head'
import Form from '../components/Layout/Form'
import { create } from 'react-test-renderer'

describe('<NavBar />', () => {
  it('renders NavBar without props', () => {
    const tree = create(<NavBar />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('renders NavBar with custom props', () => {
    const tree = create(
      <NavBar
        items={[
          {
            href: '/profile',
            text: 'My profile'
          }
        ]}
      />
    )

    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('<Form />', () => {
  it('renders Form with items', () => {
    const tree = create(
      <Form
        to="/"
        action="/"
        method="POST"
        body={[
          {
            name: 'username',
            type: 'password',
            placeholder: 'What is ur name?'
          }
        ]}
      />
    )

    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('<Meta />', () => {
  it('should render meta tags', () => {
    const tree = create(
      <Head>
        <Meta />
      </Head>
    )

    expect(tree.toJSON()).toMatchSnapshot()
  })
})
