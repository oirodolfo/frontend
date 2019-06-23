import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-boost'

const withApollo = withData({
  link: new HttpLink({
    uri: 'https://api.komfy.now.sh'
  })
})

export default withApollo
