import { courses } from '@/shared/mock/mock'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import React, { PropsWithChildren } from 'react'

export const AddToCoursePopover: React.FC<PropsWithChildren> = ({
	children
}) => {
	return (
		<Popover>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent className='w-80 p-2' arrowPadding={4} side='right'>
				<ul className='space-y-1'>
					{courses.map(course => (
						<li key={course.courseId}>
							<Popover>
								<PopoverTrigger asChild>
									<button className='w-full rounded p-2 text-left hover:bg-destructive'>
										{course.title}
									</button>
								</PopoverTrigger>
								<PopoverContent
									className='w-48 p-2'
									arrowPadding={4}
									side='right'
									sideOffset={5}
								>
									{course.chapters.map(chapter => (
										<button
											key={chapter.id}
											className='w-full rounded p-2 text-left hover:bg-destructive'
										>
											{chapter.title}
										</button>
									))}
								</PopoverContent>
							</Popover>
						</li>
					))}
				</ul>
			</PopoverContent>
		</Popover>
	)
}
