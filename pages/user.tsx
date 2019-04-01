import * as React from 'react'
import 'isomorphic-unfetch'
import { NextContext } from 'next'
import '../styles/main.styl'

type Data = {
    user: string
}

const UserPage = (props: any) => (
    <div>Hello, {props.user}!</div>
)

UserPage.getInitialProps = async ({ query }: NextContext<Data>) => {
    
    const data = await fetch(`${process.env.API_URL}/user/${query.user}`) // during development API_URL is localhost
    const json = await data.json()
    return {
        data: json
    }
}

export default UserPage