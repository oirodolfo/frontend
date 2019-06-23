import React, { useContext, ComponentType, ReactNode } from 'react'
import Link from 'next/link'
import { Flex, Image } from 'rebass'
import AppContext from '../../lib/context'
import styled from 'styled-components'

declare interface NavBarInterface {
  Logo: ComponentType
  loginLinks?: {
    href: string
    text: string
  }[]
}

const LinksGroup = styled.div`
  a {
    margin-left: 2em;
    color: whitesmoke;
    font-size: 1.2em;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const StyledNav = styled(Flex)`
  padding: 0.5em 3em;
  background: black;
`

const NavBar = ({
  Logo,
  loginLinks = [
    {
      href: '/login',
      text: 'Sign In'
    },
    {
      href: '/register',
      text: 'Sign Up'
    }
  ]
}: NavBarInterface) => {
  const { isSignedIn, user } = useContext(AppContext)

  const LogoContainer = styled(Logo)`
    height: 7vh;
    width: 100%;
  `

  return (
    <StyledNav flexWrap="wrap" flexDirection="row" width={1} alignItems="center" justifyContent="space-between">
      <Link href="/">
        <a>
          <LogoContainer />
        </a>
      </Link>
      <LinksGroup>
        {isSignedIn ? (
          <Link href={`/users/${user.userId}`}>
            <Image src={user.avatarUrl} width={[1]} />
          </Link>
        ) : (
          loginLinks.map((el: { href: string; text: ReactNode }) => (
            <Link href={el.href} key={el.href}>
              <a>{el.text}</a>
            </Link>
          ))
        )}
      </LinksGroup>
    </StyledNav>
  )
}

export default NavBar
