import React from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import styled from 'styled-components'
import Link from 'next/link'
import withData from '../lib/apollo'

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

const Index = () => {
  const { loading, error, data } = useQuery(
    gql(`
  query myQuery {
    hello
  }
`)
  )
  return (
    <Page>
      <Head>
        <title>Komfy 🔐</title>
      </Head>
      <Header>Komfy</Header>
      <h2>Project Status ⚡</h2>
      <Links>
        <Link href="https://github.com/komfy">
          <a>GitHub</a>
        </Link>
        <Link href="https://crowdforge.io/projects/534">
          <a>CrowdForge</a>
        </Link>
        <Link href="https://twitter.com/KomfySocial">
          <a>Twitter</a>
        </Link>
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
        {error && <b>{error.message}</b>}
      </div>
      <Link href={`/user?id=${(Math.random() * 5).toString().slice(2, 4)}`}>
        <a>Random user page</a>
      </Link>
    </Page>
  )
}

export default withRouter(withData(Index))
