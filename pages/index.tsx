import React from 'react'
import styled from 'styled-components'
import { Query, QueryResult } from 'react-apollo'
import { gql } from 'apollo-boost'
import Link from 'next/link'
import NavBar from '../components/Layout/NavBar'

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

const Index = () => {
  const GET_USERS = gql`
    query myQuery {
      hello
    }
  `

  return (
    <Page>
      <NavBar />
      <h1>Komfy</h1>
      <h2>Project Status ⚡</h2>
      <Links>
        {links.map((link: { href: string; text: string }, i: number) => (
            <a href={link.href} key={i}>{link.text}</a>
        ))}
      </Links>
      <Status>
        Soon there will be new stuff. You&apos;ll be able to create an account and publish images and text. Pre-alpha is
        close.
      </Status>
      <p>
        I&apos;ll answer all questions here:&nbsp;
        <Link href="https://t.me/talentless_guy">
          <a>@talentless_guy</a>
        </Link>
      </p>
      <Query query={GET_USERS}>
        {({ loading, error, data }: QueryResult) => {
          if (error) return <h1>{error}</h1>
          if (loading || !data) return <div>Loading</div>

          return <div>{JSON.stringify(data)}</div>
        }}
      </Query>
    </Page>
  )
}
export default Index
