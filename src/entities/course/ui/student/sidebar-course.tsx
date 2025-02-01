import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { Course, CourseMetadata } from '@/shared/types/course.types'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import Link from 'next/link'
import React from 'react'

export const SidebarCourse: React.FC<
	Pick<CourseMetadata, 'teacher'> & {
		isActive?: boolean
		item: Pick<Course, 'title' | 'description' | 'courseId'>
	}
> = ({ item: { title, description, courseId }, teacher, isActive }) => {
	return (
		<>
			<Link
				href={routes.course.currentUserCourse(courseId)}
				className={cn(
					'grid grid-cols-[1fr_15px] hover:bg-indigo-50 rounded-lg p-3 justify-between relative items-center cursor-pointer ',
					isActive && 'bg-accent'
				)}
			>
				<div className='flex flex-col'>
					<Title size='small' className='line-clamp-1'>
						{title}
					</Title>
					<Text color='gray' size='extraSmall' className='line-clamp-2'>
						{description}
					</Text>
					{teacher && (
						<Text size='extraSmall' className='font-bold'>
							Создатель: {teacher}
						</Text>
					)}
				</div>
			</Link>
		</>
	)
}
