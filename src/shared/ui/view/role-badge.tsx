import { cn } from '@/shared/lib/css'
import { getBadgeByUserRole } from '@/shared/lib/utils/get-badge-by-user-role'
import { UserRole } from '@/shared/types/user.types'
import React from 'react'
import Text from './text'

export const RoleBadge: React.FC<{ role: UserRole }> = ({ role }) => {
	const { text, classNames } = getBadgeByUserRole(role)
	return (
		<div
			className={cn(
				'border-2 pointer-events-none rounded-md p-1 px-6 inline-flex',
				classNames
			)}
		>
			<Text size='medium'> {text}</Text>
		</div>
	)
}
