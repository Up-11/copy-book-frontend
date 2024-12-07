import { cn } from '@/shared/lib/css'
import { getBadgeByUserRole } from '@/shared/lib/utils/get-badge-by-user-role'
import { UserRole } from '@/shared/types/user.types'
import React from 'react'
import Text from './text'

interface Props {
	role: UserRole
}

export const RoleBadge: React.FC<Props> = ({ role }) => {
	const text = getBadgeByUserRole(role)
	return (
		<div
			className={cn(
				'border-2 pointer-events-none rounded-md p-2 px-6 inline-flex',
				role === 'admin' && 'border-red-200 bg-red-100',
				role === 'student' && 'border-sky-200 bg-sky-100',
				role === 'teacher' && 'border-violet-200 bg-violet-100'
			)}
		>
			<Text size='medium'> {text}</Text>
		</div>
	)
}
