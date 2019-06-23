import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Link from 'next/link'
import AppContext from '../lib/context'
import withApollo from '../lib/apollo'
import NavBar from '../components/Layout/NavBar'
import Logo from '../assets/logo'

export const Page = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h1 {
    font-size: calc(100% + 6vw);
    font-family: Montserrat, sans-serif;
  }
  h2 {
    font-size: calc(100% + 1.2vw);
  }
`

const Status = styled.p`
  width: 40vmax;
  font-size: calc(100% + 0.5vw);
`

const Links = styled.div`
  a {
    margin-right: 0.7em;
  }
`

const links = [
  {
    href: 'https://github.com/komfy',
    text: 'GitHub 🐙'
  },
  {
    href: 'https://twitter.com/KomfySocial',
    text: 'Twitter 🐦'
  },
  {
    href: 'https://codecov.io/gh/komfy/frontend',
    text: 'CodeCov 📊'
  },
  {
    href: 'https://travis-ci.org/komfy/frontend',
    text: 'Travis CI ⛓'
  },
  {
    href: 'https://t.me/komfy',
    text: 'Telegram 📰'
  }
]

const sampleUser = {
  userId: 1,
  name: 'testUser',
  nsfw: false,
  posts: [],
  avatarUrl: ''
}

const Index = () => {
  const GET_USERS = `
  query myQuery {
    hello
  }
  `
  const { loading, error, data } = useQuery(gql(GET_USERS))

  if (error) return <Page>Error! {error.message}</Page>

  return (
    <AppContext.Provider
      value={{
        isSignedIn: false,
        user: sampleUser
      }}>
      <Page>
        <Head>
          <title>Komfy 🔐</title>
          <meta
            name="description"
            content="You're not a product anymore. Welcome to the most protected social network."
          />
        </Head>
        <NavBar Logo={Logo} />
        <h1>Komfy</h1>
        <h2>Project Status ⚡</h2>
        <Links>
          {links.map((link: { href: string; text: string }, i: number) => (
            <Link href={link.href} key={i}>
              <a>{link.text}</a>
            </Link>
          ))}
        </Links>
        <Status>
          Soon there will be new stuff. You&apos;ll be able to create an account and publish images in text. Pre-alpha
          is close.
        </Status>
        <p>
          I&apos;ll answer all questions here:&nbsp;
          <Link href="https://t.me/talentless_guy">
            <a>@talentless_guy</a>
          </Link>
        </p>
        <div>
          {loading ? (
            <b>Loading...</b>
          ) : (
            <span>
              GraphQL request:<b> {data.hello}</b>
            </span>
          )}
        </div>
      </Page>
    </AppContext.Provider>
  )
}
export default withApollo(Index)
