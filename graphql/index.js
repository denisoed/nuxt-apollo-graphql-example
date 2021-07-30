import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { from } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default ctx => {
  const ssrMiddleware = setContext((_, { headers }) => {
    if (process.client) return headers
    return {
      headers: {
        ...headers,
        connection: ctx.app.context.req.headers.connection,
        referer: ctx.app.context.req.headers.referer,
      }
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
