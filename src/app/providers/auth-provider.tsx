'use client'

import { useCheckSessionValidQuery } from '@/shared/graphql/generated/output'
import { useIsAuth } from '@/shared/hooks/is-auth'
import { Loader } from '@/shared/ui/view/loader'
import React, { PropsWithChildren, useEffect } from 'react'

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const { clientLogout } = useIsAuth()
	const { data, loading, error } = useCheckSessionValidQuery({
		errorPolicy: 'all'
	})

	useEffect(() => {
		if (!loading) {
			const hasAuthData = localStorage.getItem('auth')

			if ((error || !data?.checkSessionValid) && hasAuthData) {
				clientLogout()
			} else if (error || !data?.checkSessionValid) {
			}
		}
	}, [data, loading, error, clientLogout])

	if (loading) {
		return <Loader />
	}

	return <>{children}</>
}
