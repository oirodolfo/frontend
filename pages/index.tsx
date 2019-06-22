import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Link from 'next/link'
import withApollo from '../lib/apollo'

export const Page = styled.div`
  font-family: sans-serif;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 3%;
`

const Header = styled.h1`
  font-size: calc(100% + 6vw);
  font-family: Montserrat, sans-serif;
  margin-bottom: 0;
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

const randomUser = (Math.random() * 10).toString().slice(3, 10)

const links = [
  {
    href: 'https://github.com/komfy',
    title: 'GitHub 🐙'
  },
  {
    href: 'https://twitter.com/KomfySocial',
    title: 'Twitter 🐦'
  },
  {
    href: 'https://codecov.io/gh/komfy/frontend',
    title: 'CodeCov 📊'
  },
  {
    href: 'https://travis-ci.org/komfy/frontend',
    title: 'Travis CI ⛓'
  },
  {
    href: 'https://t.me/komfy',
    title: 'Telegram 📰'
  }
]

const Index = () => {
  const GET_USERS = `
  query myQuery {
    hello
  }
  `
  const { loading, error, data } = useQuery(gql(GET_USERS))

  if (error) return <Page>Error! {error.message}</Page>

  return (
    <Page>
      <Head>
        <title>Komfy 🔐</title>
        <meta
          name="description"
          content="You're not a product anymore. Welcome to the most protected social network."
        />
      </Head>
      <Header>Komfy</Header>
      <h2>Project Status ⚡</h2>
      <Links>
        {links.map((link: { href: string; title: string }, i: number) => (
          <Link href={link.href} key={i}>
            <a>{link.title}</a>
          </Link>
        ))}
      </Links>
      <Status>
        Soon there will be new stuff. You&apos;ll be able to create an account and publish images in text. Pre-alpha is
        close.
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
      <Link href={`/user?id=${randomUser}`} as={`/user/${randomUser}`}>
        <a>Random user page</a>
      </Link>
    </Page>
  )
}
export default withApollo(Index)
