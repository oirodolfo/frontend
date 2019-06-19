import React from 'react'
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
  </Page>
)

UserPage.getInitialProps = async ({ query }: NextContext<UserPage>) => {
  return {
    id: query.id
  }
}

export default UserPage
