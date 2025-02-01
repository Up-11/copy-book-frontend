'use client'

import {
	StudentNavigationMenu,
	TeacherNavigationMenu
} from '@/features/navigation'
import { routes } from '@/shared/config/routes'
import { useRoleStore } from '@/shared/store/user-role.store'
import { UserRole } from '@/shared/types/user.types'
import { UiAvatar } from '@/shared/ui/custom/ui-avatar'
import { Button } from '@/shared/ui/other/button'
// import { Button } from '@/shared/ui/other/button'
import { LogoWithRoleBadge } from '@/shared/ui/view/logo-with-role-badge'
import Text from '@/shared/ui/view/text'
import Link from 'next/link'
import React from 'react'

export const RootHeader: React.FC = () => {
	const role = useRoleStore(state => state.role)
	const setRole = useRoleStore(state => state.setRole)

	const dashboardHrefs = {
		[UserRole.STUDENT]: routes.dashboard.student,
		[UserRole.TEACHER]: routes.dashboard.teacher
	} as const

	return (
		<>
			<header className='header-w mt-2 flex w-full items-center justify-between gap-1'>
				<div className='flex items-center gap-3'>
					<Link href={dashboardHrefs[role as keyof typeof dashboardHrefs]}>
						<LogoWithRoleBadge role={role} hasLink={false} />
					</Link>
					<nav className='flex items-center max-md:hidden'>
						{role === UserRole.STUDENT ? (
							<StudentNavigationMenu />
						) : (
							<TeacherNavigationMenu />
						)}
					</nav>
				</div>
				<div className='flex items-center gap-14'>
					<Link
						href={routes.profile.personal}
						className='flex items-center gap-1'
					>
						<Text size='small'>Иван Иванов</Text>
						<UiAvatar />
					</Link>
				</div>
			</header>
			<div className='fixed bottom-3 right-3'>
				<Button onClick={() => setRole(UserRole.STUDENT)}>Ученик</Button>
				<Button onClick={() => setRole(UserRole.TEACHER)}>Препод</Button>
			</div>
		</>
	)
}
