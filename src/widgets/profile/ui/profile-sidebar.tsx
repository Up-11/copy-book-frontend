'use client'

import { sidebarItems } from '../sidebar-items.data'
import { SidebarItem } from './sidebar-item'
import { useLastPathnameElement } from '@/shared/lib/hooks/use-last-pathname-element'
import { UserRole } from '@/shared/types/user.types'
import React from 'react'

export const ProfileSidebar: React.FC<{ role: Omit<UserRole, 'admin'> }> = ({
	role = 'student'
}) => {
	const { currentPage } = useLastPathnameElement()

	return (
		<aside className='border-r-primary border-r mr-4  h-[87vh]  pr-4 flex flex-col gap-1 '>
			{role === 'student' &&
				sidebarItems.map((item, index) => (
					<SidebarItem
						key={index}
						{...item}
						isActive={item.link.includes(currentPage!)}
					/>
				))}
		</aside>
	)
}
