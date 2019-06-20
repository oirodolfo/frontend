import React from 'react'
import Head from 'next/head'
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

const GET_USERS = `
query myQuery {
  hello
}
`

const randomUser = (Math.random() * 10).toString().slice(3, 10)

const Index = () => {
  const { loading, error, data } = useQuery(gql(GET_USERS))

  if (data) {
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
          <span>
            GraphQL request:<b> {data.hello}</b>
          </span>
        </div>
        <Link href={`/user?id=${randomUser}`} as={`/user/${randomUser}`}>
          <a>Random user page</a>
        </Link>
      </Page>
    )
  }
  if (loading) {
    return <Page>Loading...</Page>
  }
  if (error) {
    return <Page>Error! {error.message}</Page>
  }
}

export default withData(Index)
