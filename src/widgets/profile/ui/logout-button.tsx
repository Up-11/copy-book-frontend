'use client'

import { routes } from '@/shared/config/routes'
import { useLogoutUserMutation } from '@/shared/graphql/generated/output'
import { useAuthStore } from '@/shared/store/auth-store'
import { useRoleStore } from '@/shared/store/user-role.store'
import { Button } from '@/shared/ui/other/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

export const LogoutButton: React.FC = () => {
	const router = useRouter()
	const resetUser = useAuthStore(state => state.resetUser)
	const resetRole = useRoleStore(state => state.resetRole)
	const [logout, { loading }] = useLogoutUserMutation({
		onCompleted: () => {
			router.replace(routes.home)
			toast.success('Выход выполнен')
			resetUser()
			resetRole()
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
