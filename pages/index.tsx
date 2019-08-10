import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Query, QueryResult } from 'react-apollo'
import { gql, DocumentNode } from 'apollo-boost'
import Link from 'next/link'
import NavBar from '../components/Layout/NavBar'
import { Page } from '../components/Primitives'

/* const Status = styled.p`
  width: 40vmax;
  font-size: calc(100% + 0.5vw);
` */

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
  const HELLO_WORLD: DocumentNode = gql`
    query myQuery {
      hello
    }
  `

  return (
    <Fragment>
      <NavBar />
      <Page flexDirection="column" alignItems="center" justifyContent="center">
        <h1>Komfy</h1>
        <h2>Project Status ⚡</h2>
        <Links>
          {links.map((link: { href: string; text: string }, i: number) => (
            <a href={link.href} key={i}>
              {link.text}
            </a>
          ))}
        </Links>
        <p>
          I&apos;ll answer all questions here:&nbsp;
          <Link href="https://t.me/talentless_guy">
            <a>@talentless_guy</a>
          </Link>
        </p>
        <Query query={HELLO_WORLD}>
          {({ loading, error, data }: QueryResult) => {
            if (error) return <h1>{error}</h1>
            if (loading || !data) return <div>Loading</div>

            return <div>{JSON.stringify(data)}</div>
          }}
        </Query>
      </Page>
    </Fragment>
  )
}
export default Index
