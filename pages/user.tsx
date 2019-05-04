import * as React from 'react'
import 'isomorphic-unfetch'
import { NextContext } from 'next'
import '/styles/main.css'

declare interface UserPage {
    user: string
}

const UserPage = (props: UserPage) => (
    <div>
        <p>Hello, {props.user}!</p>
        <p>There will be content soon.</p>
        <p>You need to wait a bit</p>
    </div>
)

UserPage.getInitialProps = async ({ query }: NextContext<UserPage>) => {
    return {
        user: query.user
    }
}

export default UserPage
