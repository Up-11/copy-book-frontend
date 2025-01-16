import Text from './text'
import { cn } from '@/shared/lib/css'
import { getBadgeByUserRole } from '@/shared/lib/map'
import { UserRole } from '@/shared/types/user.types'
import React from 'react'

export const RoleBadge: React.FC<{ role: UserRole }> = ({ role }) => {
	const { text, classNames } = getBadgeByUserRole(role)
	return (
		<div
			className={cn(
				'pointer-events-none inline-flex rounded-md border-2 p-1 px-6',
				classNames
			)}
		>
			<Text size='medium'> {text}</Text>
		</div>
	)
}
