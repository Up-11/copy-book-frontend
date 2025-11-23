import { ApolloClient, InMemoryCache } from '@apollo/client'
import { HttpLink } from '@apollo/client/link/http'

const httpLink = new HttpLink({
	uri: process.env.NEXT_PUBLIC_SERVER_URL,
	credentials: 'include'
})

export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
})
