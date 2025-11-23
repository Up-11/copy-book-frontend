'use client'

import {
	StudentNavigationMenu,
	TeacherNavigationMenu
} from '@/features/navigation'
import { routes } from '@/shared/config/routes'
import { UserRole } from '@/shared/graphql/generated/output'
import { useAuthStore } from '@/shared/store/auth-store'
import { LogoWithRoleBadge } from '@/shared/ui/view/logo-with-role-badge'
import { ProfileButton } from '@/widgets/profile/ui/profile-button'
import Link from 'next/link'
import React from 'react'

export const RootHeader: React.FC = () => {
	const role = useAuthStore(state => state.role)

	const dashboardHrefs = {
		[UserRole.Student]: routes.dashboard.student,
		[UserRole.Teacher]: routes.dashboard.teacher
	} as const

	return (
		<>
			{role !== null && (
				<header className='header-w mt-2 flex w-full items-center justify-between gap-1'>
					<div className='flex items-center gap-3'>
						<Link href={dashboardHrefs[role as keyof typeof dashboardHrefs]}>
							<LogoWithRoleBadge role={role} hasLink={false} />
						</Link>
						<nav className='flex items-center max-md:hidden'>
							{role === UserRole.Student ? (
								<StudentNavigationMenu />
							) : (
								<TeacherNavigationMenu />
							)}
						</nav>
					</div>
					<div className='flex items-center gap-14'>
						<ProfileButton />
					</div>
				</header>
			)}
		</>
	)
}
