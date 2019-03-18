import * as React from 'react'
import { NextContext } from 'next'
import '../styles/main.styl'

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