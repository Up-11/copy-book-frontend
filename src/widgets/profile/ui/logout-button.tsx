'use client'

import { useLogoutUserMutation } from '@/shared/api/graphql/generated/output'
import { routes } from '@/shared/config/routes'
import { useAuthStore } from '@/shared/store/auth-store'
import { Button } from '@/shared/ui/other/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

export const LogoutButton: React.FC = () => {
	const router = useRouter()
	const resetUser = useAuthStore(state => state.resetUser)
	const [logout, { loading }] = useLogoutUserMutation({
		onCompleted: () => {
			router.replace(routes.home)
			toast.success('Выход выполнен')
			resetUser()
		},
		onError: error => {
			toast.error(error.message)
		}
	})
	return (
		<Button variant='destructive' onClick={() => logout()} loading={loading}>
			Выйти
		</Button>
	)
}
