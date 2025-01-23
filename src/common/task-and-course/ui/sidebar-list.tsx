'use client'

import { SidebarCourse } from '@/entities/course'
import { SidebarTask } from '@/entities/task'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { useParamsId } from '@/shared/lib/hooks/use-last-pathname-element'
import { Course } from '@/shared/types/course.types'
import { TaskProps } from '@/shared/types/task.types'
import { ScrollArea } from '@/shared/ui/other/scroll-area'
import Text from '@/shared/ui/view/text'
import Image from 'next/image'
import React from 'react'

export const SidebarList: React.FC<{
	items: TaskProps[] | Course[]
}> = ({ items }) => {
	const { currentPage } = useParamsId()

	const isCourseList = (items: (TaskProps | Course)[]): items is Course[] => {
		return items.some(item => (item as Course).courseId !== undefined)
	}
	const isCourses = isCourseList(items)

	return (
		<ScrollArea>
			<div className='screen-no-header flex flex-col gap-1'>
				<WithCondition
					condition={items.length === 0}
					render={
						<div className='flex flex-col items-center justify-center'>
							<Image
								src={'/assets/empty.png'}
								alt='Список пуст'
								width={100}
								height={100}
								loading='lazy'
							/>
							<Text size='small' color='gray'>
								Список пуст
							</Text>
						</div>
					}
					fallback={
						isCourses
							? items.map(item => (
									<SidebarCourse
										key={item.courseId}
										isActive={item.courseId === currentPage}
										teacher={item.metadata.teacher}
										item={item}
									/>
								))
							: items.map(item => (
									<SidebarTask
										key={item.id}
										item={item}
										isActive={item.id === currentPage}
									/>
								))
					}
				/>
			</div>
		</ScrollArea>
	)
}
