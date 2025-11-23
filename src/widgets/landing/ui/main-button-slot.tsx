'use client'

import { getDashboardRoute, routes } from '@/shared/config/routes'
import { useIsAuth } from '@/shared/hooks/is-auth'
import { Button } from '@/shared/ui/other/button'
import { ChooseRoleModal } from '@/widgets/modals/ui/choose-role-modal'
import Link from 'next/link'
import React from 'react'

export const MainButtonSlot: React.FC<{ buttonVariant?: '1' | '2' }> = ({
	buttonVariant = 1
}) => {
	const { isAuth, role } = useIsAuth()
	const dashboardUrl = getDashboardRoute(role!)
	if (buttonVariant === '1') {
		return (
			<>
				{isAuth ? (
					<Link href={dashboardUrl}>
						<Button
							size={'lg'}
							variant={'secondary'}
							className='bg-indigo-500 text-xl text-white hover:bg-indigo-500/90 max-sm:w-full'
						>
							В дэшборд
						</Button>
					</Link>
				) : (
					<ChooseRoleModal>
						<Button
							isModalTrigger
							size={'lg'}
							variant={'secondary'}
							className='bg-indigo-500 text-xl text-white hover:bg-indigo-500/90 max-sm:w-full'
						>
							Начать
						</Button>
					</ChooseRoleModal>
				)}
			</>
		)
	}
	if (buttonVariant === '2') {
		return (
			<>
				{isAuth ? (
					<Link href={dashboardUrl} className='self-center'>
						<Button
							variant={'destructive'}
							className='self-center font-bold text-indigo-500'
						>
							В дэшборд
						</Button>
					</Link>
				) : (
					<ChooseRoleModal>
						<Button
							isModalTrigger
							variant={'destructive'}
							className='self-center font-bold text-indigo-500'
						>
							Перейти в тетрадь
						</Button>
					</ChooseRoleModal>
				)}
			</>
		)
	}
}
