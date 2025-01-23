'use client'

import { sidebarItems } from '../sidebar-items.data'
import { SidebarItem } from './sidebar-item'
import { useParamsId } from '@/shared/lib/hooks/use-last-pathname-element'
import { UserRole } from '@/shared/types/user.types'
import React from 'react'

export const ProfileSidebar: React.FC<{ role: Omit<UserRole, 'admin'> }> = ({
	role = 'student'
}) => {
	const { currentPage } = useParamsId()

	return (
		<aside className='mr-4 flex h-[87vh] flex-col gap-1 border-r border-r-primary pr-4'>
			{role === 'student' &&
				sidebarItems.map((item, index) => (
					<SidebarItem
						key={index}
						{...item}
						isActive={item.link === currentPage}
					/>
				))}
		</aside>
	)
}
