import { TaskPopover } from './task-popover'
import { TaskCourse } from './task-primitive/task-course'
import { TaskDeadline } from './task-primitive/task-deadline'
import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import { TaskProps } from '@/shared/types/task.types'
import { Button } from '@/shared/ui/other/button'
import { TaskDiffBadge } from '@/shared/ui/view/task-diff-badge'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import Link from 'next/link'
import React from 'react'

export const DashboardTask: React.FC<
	{ item: TaskProps } & PropsWithClassName
> = ({ className, item }) => {
	return (
		<div
			className={cn(
				'flex flex-col gap-2 rounded-lg bg-indigo-50 p-layout',
				className
			)}
		>
			<div className='mb-4 h-[35%]'>
				<div className='flex justify-between gap-2'>
					<Title size='medium' className='line-clamp-2'>
						{item.title}
					</Title>
					<TaskDiffBadge diff={item.difficulty} />
				</div>
				<div>
					<Text color='gray' size='small' className='line-clamp-4'>
						{item.description}
					</Text>
				</div>
			</div>
			<TaskDeadline deadline={item.deadline!} />
			<TaskCourse taskCourse={item.course!} />
			<div className='mt-auto flex justify-between'>
				<TaskPopover item={item} isDashboard>
					<Button variant='default'>Подробнее</Button>
				</TaskPopover>
				<Link href={routes.tasks.currentUserTask(item.id)}>
					<Button variant='outline'>Открыть</Button>
				</Link>
			</div>
		</div>
	)
}
