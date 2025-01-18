import { TaskCourse } from './task-primitive/task-course'
import { TaskDeadline } from './task-primitive/task-deadline'
import { TaskProgress } from './task-progress'
import { routes } from '@/shared/config/routes'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { cn } from '@/shared/lib/css'
import { getTaskStatus } from '@/shared/lib/map'
import { PropsWithClassName } from '@/shared/types/props.types'
import { TaskPageProps } from '@/shared/types/task.types'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import { Button } from '@/shared/ui/other/button'
import { TaskDiffBadge } from '@/shared/ui/view/task-diff-badge'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

export const TaskPopover: React.FC<
	PropsWithChildren &
		PropsWithClassName & { item: TaskPageProps; isDashboard?: boolean }
> = ({ item, className, children, isDashboard = false }) => {
	return (
		<Popover>
			<PopoverTrigger className={className} asChild>
				{children}
			</PopoverTrigger>
			<PopoverContent
				align='center'
				className='p-layout w-[450px] flex flex-col gap-2'
			>
				<div className='flex justify-between items-center'>
					<Title>{item.title}</Title>
					<TaskDiffBadge className='text-base' diff={item.difficulty} />
				</div>
				<Text size='small' color='gray'>
					{item.description}
				</Text>
				<TaskProgress item={item} />
				<TaskDeadline
					format='lll A'
					deadline={item.deadline!}
					extraCondition={isDashboard}
				/>
				<TaskCourse taskCourse={item.TaskCourse!} />
				<div className='grid grid-cols-2 gap-3'>
					<WithCondition
						className='bg-indigo-200  p-2 rounded-lg'
						condition={!!item.taskStatus}
						render={
							<div className='flex gap-2 items-center'>
								<Text size='small' className='self-start'>
									Статус:
								</Text>
								<Text
									size='small'
									className='font-bold line-clamp-2 break-words '
								>
									{getTaskStatus(item.taskStatus)}
								</Text>
							</div>
						}
					/>
					<WithCondition
						className='bg-indigo-200  p-2 rounded-lg'
						condition={!!item.taskRating}
						render={
							<div className='flex gap-2 items-center '>
								<Text size='small' className='self-start'>
									Рейтинг:
								</Text>
								<Text
									size='small'
									className='font-bold line-clamp-2 break-words '
								>
									{item.taskRating}
								</Text>
							</div>
						}
					/>
				</div>
				<div
					className={cn(
						'mt-auto flex ',
						!item.TaskCourse ? 'justify-between' : 'justify-end'
					)}
				>
					<WithCondition
						className='self-end'
						condition={!item.TaskCourse}
						render={<Button variant={'outline'}>Удалить</Button>}
					/>

					<div className='flex gap-3 mt-8'>
						<Link href={routes.tasks.currentUserTask(item.id)}>
							<Button variant={'destructive'}>Открыть страницу</Button>
						</Link>
						<Button>
							{item.completedMicrotasks !== 0 ? 'Продолжить' : 'Выполнить'}
						</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
