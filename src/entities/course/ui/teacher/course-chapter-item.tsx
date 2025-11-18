import { cn } from '@/shared/lib/css'
import { CourseChapter } from '@/shared/types/course.types'
import Title from '@/shared/ui/view/title'
import React from 'react'

export const CourseChapterItem: React.FC<{
	item: Omit<CourseChapter, 'status'>
}> = ({ item }) => {
	return (
		<div
			className={cn(
				'flex h-full select-none flex-col rounded-md bg-accent p-2'
			)}
		>
			<div className='flex items-center justify-between'>
				<Title size='small'> {item.title}</Title>
			</div>
		</div>
	)
}
