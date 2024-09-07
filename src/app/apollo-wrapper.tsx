'use client'

import { ApolloProvider } from '@apollo/client'
import client from '@/graphql/config'

export default function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
