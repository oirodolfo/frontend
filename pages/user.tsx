import * as React from 'react'
import 'isomorphic-unfetch'
import { NextContext } from 'next'
import '../styles/main.css'

interface Data {
    user: string
}

const UserPage = (props: Data) => <div>Hello, {props.user}!</div>

UserPage.getInitialProps = async ({ query }: NextContext<Data>) => {
    return {
        user: query.user
    }
}

export default UserPage
