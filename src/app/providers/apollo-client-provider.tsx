'use client'

import { client } from '@/shared/lib/apollo-client'
import { ApolloProvider } from '@apollo/client/react'
import React, { PropsWithChildren } from 'react'

export const ApolloClientProvider: React.FC<PropsWithChildren<unknown>> = ({
	children
}: PropsWithChildren<unknown>) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
