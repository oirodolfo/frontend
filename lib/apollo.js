import { withData } from 'next-apollo'
import { HttpLink, InMemoryCache } from 'apollo-boost'

const withApollo = (
  config = {
    link: new HttpLink({
      uri: 'https://api.komfy.now.sh',
      opts: {
        credentials: 'same-origin'
      }
    }),
    cache: new InMemoryCache()
  }
) => withData(config)

export default withApollo
