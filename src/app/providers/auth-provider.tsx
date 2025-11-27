'use client'

import { useCheckSessionValidQuery } from '@/shared/api/graphql/generated/output'
import { useIsAuth } from '@/shared/hooks/is-auth'
import { FullscreenLoader } from '@/shared/ui/view/fullscreen-loader'
import React, { PropsWithChildren, useEffect } from 'react'

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const { clientLogout } = useIsAuth()
	const { loading, refetch } = useCheckSessionValidQuery()

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const result = await refetch()
				if (!result.data?.checkSessionValid) {
					clientLogout()
				}
				if (result.data?.checkSessionValid) {
				}
			} catch {
				clientLogout()
			}
		}

		if (localStorage.getItem('auth')) {
			checkAuth()
		}
	}, [])

	if (loading) {
		return <FullscreenLoader />
	}

	return <>{children}</>
}
