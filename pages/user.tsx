import React from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'
import { NextPageContext } from 'next'
import { Page } from '../components/Primitives'

const UserPage = ({ id }: { id: string }) => (
  <Page>
    <p>Hello, #{id}!</p>
    <p>There will be content soon.</p>
    <p>You need to wait a bit until we release our pre-alpha.</p>
    <Link href="/">
      <a>Home</a>
    </Link>
  </Page>
)

UserPage.getInitialProps = async ({ query }: NextPageContext) => ({
  id: query.id
})

export default UserPage
