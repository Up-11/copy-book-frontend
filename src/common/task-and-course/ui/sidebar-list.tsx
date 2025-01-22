'use client'

import { SidebarCourse } from '@/entities/course'
import { SidebarTask } from '@/entities/task'
import { useLastPathnameElement } from '@/shared/lib/hooks/use-last-pathname-element'
import { Course } from '@/shared/types/course.types'
import { TaskProps } from '@/shared/types/task.types'
import { ScrollArea } from '@/shared/ui/other/scroll-area'
import React from 'react'

export const SidebarList: React.FC<{
	items: TaskProps[] | Course[]
}> = ({ items }) => {
	const { currentPage } = useLastPathnameElement()

	const isCourseList = (items: (TaskProps | Course)[]): items is Course[] => {
		return items.some(item => (item as Course).courseId !== undefined)
	}
	const isCourses = isCourseList(items)

	return (
		<ScrollArea>
			<div className='screen-no-header flex flex-col gap-1'>
				{isCourses
					? items.map(item => (
							<SidebarCourse
								key={item.courseId}
								courseId={item.courseId}
								title={item.title}
								description={item.description}
								isActive={item.courseId === currentPage}
								teacher={item.metadata.teacher}
							/>
						))
					: items.map(item => (
							<SidebarTask
								key={item.id}
								id={item.id}
								deadline={item.deadline}
								description={item.description}
								title={item.title}
								difficulty={item.difficulty}
								isActive={item.id === currentPage}
							/>
						))}
			</div>
		</ScrollArea>
	)
}
