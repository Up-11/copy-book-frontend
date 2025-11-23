import { Popover, PopoverContent, PopoverTrigger } from '../modals/popover'
import { LogoWithText } from './logo-with-text'
import { RoleBadge } from './role-badge'
import Text from './text'
import { routes } from '@/shared/config/routes'
import { UserRole } from '@/shared/graphql/generated/output'
import Link from 'next/link'
import React from 'react'

export const LogoWithRoleBadge: React.FC<{
	hasLink?: boolean
	role: UserRole
	color?: 'primary' | 'indigo'
	hasChoice?: boolean
}> = ({ role, color = 'primary', hasLink = true, hasChoice = false }) => {
	return (
		<div className='flex items-center gap-2'>
			<LogoWithText color={color} hasLink={hasLink} />

			{hasChoice ? (
				<Popover>
					<PopoverTrigger asChild>
						<button type='button'>
							<RoleBadge role={role} />
						</button>
					</PopoverTrigger>
					<PopoverContent className='w-50 p-2'>
						<Link
							href={
								role === UserRole.Student
									? routes.auth.teacher
									: routes.auth.student
							}
							className='inline-flex'
						>
							<Text
								size='extraSmall'
								className='text-indigo-600 hover:underline'
							>
								Авторизоваться как{' '}
								{role === UserRole.Student ? 'учитель' : 'ученик'}
							</Text>
						</Link>
					</PopoverContent>
				</Popover>
			) : (
				<RoleBadge role={role} />
			)}
		</div>
	)
}
