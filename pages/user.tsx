import * as React from 'react'
import 'isomorphic-unfetch'
import { NextContext } from 'next'
import '/styles/main.css'

const UserPage = (props: { user: string }) => (
    <div>
        <p>Hello, {props.user}!</p>
        <p>There will be content soon.</p>
        <p>You need to wait a bit</p>
    </div>
)

UserPage.getInitialProps = async ({ query }: NextContext<{ user: string }>) => {
    return {
        user: query.user
    }
}

export default UserPage
