'use client'

import { useTaskCreation } from '../model/use-task-creation'
import { SwitchItem } from '@/features/filter/ui/switch-item'
import { cn } from '@/shared/lib/css'
import { courses } from '@/shared/mock/mock'
import { CourseChapter } from '@/shared/types/course.types'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import { Button } from '@/shared/ui/other/button'
import Title from '@/shared/ui/view/title'
import React, { Fragment, PropsWithChildren } from 'react'

export const AddToCoursePopover: React.FC<PropsWithChildren> = ({
	children
}) => {
	const { setters, getters } = useTaskCreation()
	return (
		<Popover>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent className='w-80 p-2' arrowPadding={4} side='right'>
				<Title size='small' className='mb-2 ml-4'>
					Курсы
				</Title>
				<ul className='space-y-1'>
					{courses.map(course => (
						<li key={course.courseId}>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant={'ghost'}
										onClick={() =>
											setters.course({
												title: course.title,
												chapter:
													getters.course.title === course.title
														? getters.course.chapter
														: ''
											})
										}
										className={cn(
											'w-full justify-start',
											getters.course.title === course.title &&
												'bg-indigo-50 text-indigo-700'
										)}
									>
										{course.title}
									</Button>
								</PopoverTrigger>
								<PopoverContent
									className='p-2'
									arrowPadding={4}
									side='right'
									sideOffset={5}
								>
									<Title size='small' className='mb-2 ml-4'>
										Секции
									</Title>
									<RenderChapters
										currentChapter={getters.course.chapter}
										chapters={course.chapters}
										onClickSetChapter={title =>
											setters.course({ ...course, chapter: title })
										}
									/>
								</PopoverContent>
							</Popover>
						</li>
					))}
				</ul>
			</PopoverContent>
		</Popover>
	)
}
const RenderChapters: React.FC<{
	chapters: CourseChapter[]
	onClickSetChapter: (value: string) => void
	currentChapter: string
}> = ({ chapters, onClickSetChapter, currentChapter }) => {
	return (
		<>
			{chapters.map(chapter => (
				<Fragment key={chapter.id}>
					<SwitchItem
						onClick={() => onClickSetChapter(chapter.title)}
						wrapperClassName={cn(
							'w-full',
							currentChapter === chapter.title && 'bg-indigo-50 text-indigo-700'
						)}
					>
						{chapter.title}
					</SwitchItem>
				</Fragment>
			))}
		</>
	)
}
