import React from 'react'
import AppContext from '../lib/context'
import NavBar from '../components/Layout/NavBar'
import { create } from 'react-test-renderer'
import Logo from '../assets/logo'

describe('<NavBar />', () => {
  const sampleUser = {
    userId: 1,
    name: 'testUser',
    avatarUrl: ''
  }
  const initialContext = {
    isSignedIn: false,
    user: sampleUser
  }
  const loginLinks = [
    {
      href: '/auth',
      text: 'Sign In'
    },
    {
      href: '/register',
      text: 'Sign Up'
    }
  ]

  it('Navbar without Sign In renders correctly', () => {
    const tree = create(
      <AppContext.Provider value={initialContext}>
        <NavBar Logo={Logo} loginLinks={loginLinks} />
      </AppContext.Provider>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it('Navbar with renders with Sign In too', () => {
    const tree = create(
      <AppContext.Provider value={{ ...initialContext, isSignedIn: true }}>
        <NavBar Logo={Logo} loginLinks={loginLinks} />
      </AppContext.Provider>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
