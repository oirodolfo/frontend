import * as React from 'react'
import 'isomorphic-unfetch'
import { NextContext } from 'next'
import '../styles/main.css'

declare interface UserPage {
	id: string
}

const UserPage = ({ id }: UserPage) => (
	<div>
		<p>Hello, #{id}!</p>
		<p>There will be content soon.</p>
		<p>You need to wait a bit until we release our pre-alpha.</p>
	</div>
)

UserPage.getInitialProps = async ({ query }: NextContext<UserPage>) => {
	return {
		id: query.id
	}
}

export default UserPage
