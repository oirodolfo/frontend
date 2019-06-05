import * as React from 'react'
import { Query, QueryResult } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'
import '../styles/main.css'
import withData from '../lib/apollo'

const str = `
query data {
	hello
}
`

const App = () => (
  <div>
    <h1>Komfy</h1>
    <h2>Our first GraphQL query! 🎉</h2>
    <Query query={gql(str)}>
      {({ loading, error, data }: QueryResult) => {
        if (loading) return <p>Loading</p>
        if (error) return <p>Error</p>
        return (
          <div>
            <h3>Query:</h3>
            <pre>{str}</pre>
            <p>
              Output: <b>{data.hello}</b>
            </p>
          </div>
        )
      }}
    </Query>
    <Link href={`/user/${(Math.random() * 10).toString().slice(2, 8)}`}>
      <a>Let&apos;s go to a random user page</a>
    </Link>
  </div>
)

export default withData(App)
