import React from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'
import { NextContext } from 'next'
import { Page } from './index'

declare interface UserPage {
  id: string
}

const UserPage = ({ id }: UserPage) => (
  <Page>
    <p>Hello, #{id}!</p>
    <p>There will be content soon.</p>
    <p>You need to wait a bit until we release our pre-alpha.</p>
    <Link href="/">
      <a>Home</a>
    </Link>
  </Page>
)

UserPage.getInitialProps = async ({ query }: NextContext<UserPage>) => ({
  id: query.id
})

export default UserPage
