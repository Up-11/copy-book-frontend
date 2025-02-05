'use client'

import { ISidebar } from '../types'
import { SidebarList } from './sidebar-list'
import { SidebarPrimitive } from './sidebar-primitive'
import { Filters } from '@/features/filter'
import { Course } from '@/shared/types/course.types'
import { TaskProps } from '@/shared/types/task.types'
import Title from '@/shared/ui/view/title'
import Link from 'next/link'

export const UserSidebar = <T extends TaskProps[] | Course[]>({
	tabs,
	mainHref,
	mainTitle,
	isTask
}: ISidebar<T & { isTask?: boolean }>) => {
	{
		return (
			<SidebarPrimitive
				tabs={tabs}
				sidebarList={tab => <SidebarList items={tab.itemsList} />}
				renderHeader={
					<>
						<Link href={mainHref}>
							<Title>{mainTitle}</Title>
						</Link>
						<Filters isTask={isTask!} isSidebar />
					</>
				}
			/>
		)
	}
}
