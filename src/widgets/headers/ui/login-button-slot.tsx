'use client'

import { useIsAuth } from '@/shared/hooks/is-auth'
import { Button } from '@/shared/ui/other/button'
import { ChooseRoleModal } from '@/widgets/modals/ui/choose-role-modal'
import { ProfileButton } from '@/widgets/profile/ui/profile-button'
import React from 'react'

export const LoginButtonSlot: React.FC = () => {
	const { isAuth } = useIsAuth()

	return (
		<>
			{isAuth ? (
				<ProfileButton className='text-white' />
			) : (
				<ChooseRoleModal>
					<Button variant={'secondary'} className='button max-md:hidden'>
						Открыть тетрадь
					</Button>
				</ChooseRoleModal>
			)}
		</>
	)
}
