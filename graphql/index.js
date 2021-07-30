import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { from } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default () => {
  const ssrMiddleware = setContext((_, { headers }) => {
    if (process.client) return headers
    return {
      headers
    }
  })

  const httpLink = new HttpLink({
    uri: process.env.nuxtApiUrl,
    credentials: 'include',
  })

  const link = from([ssrMiddleware, httpLink])
  const cache = new InMemoryCache()

  return {
    link,
    cache,
    defaultHttpLink: false
  }
}
