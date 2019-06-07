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
    <div>
      <a href="https://github.com/komfy" rel="noopener norefferer" target="_blank">
        GitHub
      </a>
      &nbsp;
      <a href="https://crowdforge.io/projects/534" rel="noopener norefferer" target="_blank">
        CrowdForge
      </a>
    </div>
    <h2>Project status ⚡</h2>
    <p className="status">
      Currently we are working on UI library and API so during next months there won&apos;t be any huge changes here.
      Please stand by until we release v0.0.1 of both API and UI library so we can begin building the website itself.
    </p>
    I&apos; answer all questions here: <a href="t.me/talentless_guy">@talentless_guy</a>
    <Query query={gql(str)}>
      {({ loading, error, data }: QueryResult) => {
        if (loading) return <p>Loading</p>
        if (error) return <p>Error</p>
        return (
          <div>
            <p>
              GraphQL request: <b>{JSON.stringify(data)}</b>
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
