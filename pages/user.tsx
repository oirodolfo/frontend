import * as React from 'react'
import 'isomorphic-unfetch'
import { NextContext } from 'next'
import '../styles/main.css'

type Data = {
    user: string
}

const UserPage = (props: any) => (
    <div>Hello, {props.user}!</div>
)

UserPage.getInitialProps = async ({ query }: NextContext<Data>) => {
    return {
        user: query.user
    }
}

export default UserPage