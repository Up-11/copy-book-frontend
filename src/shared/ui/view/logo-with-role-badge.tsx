import { LogoWithText } from './logo-with-text'
import { RoleBadge } from './role-badge'
import { UserRole } from '@/shared/types/user.types'
import React from 'react'

export const LogoWithRoleBadge: React.FC<{
	hasLink?: boolean
	role: UserRole
	color?: 'primary' | 'indigo'
}> = ({ role, color = 'primary', hasLink = true }) => {
	return (
		<div className='flex items-center gap-2'>
			<LogoWithText color={color} hasLink={hasLink} />
			<RoleBadge role={role} />
		</div>
	)
}
