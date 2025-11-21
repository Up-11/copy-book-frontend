'use client'

import { sidebarItems } from '../sidebar-items.data'
import { SidebarItem } from './sidebar-item'
import { UserRole } from '@/shared/graphql/generated/output'
import { usePathname } from 'next/navigation'
import React from 'react'

export const ProfileSidebar: React.FC<{ role: Omit<UserRole, 'admin'> }> = ({
	role = 'student'
}) => {
	const pathname = usePathname()

	return (
		<aside className='mr-4 flex h-[87vh] flex-col  pr-4'>
			{role === 'student' &&
				sidebarItems.map((item, index) => (
					<SidebarItem
						key={index}
						{...item}
						isActive={pathname.includes(item.link)}
					/>
				))}
		</aside>
	)
}
