import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    credentials: 'same-origin',
    uri: 'https://api.komfy.now.sh'
  })
}

export default withData(config)
