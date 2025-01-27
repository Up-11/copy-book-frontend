import { TaskProgress } from '../../../common/task-and-course/ui/progress-bar'
import { TaskCourse } from './task-primitive/task-course'
import { TaskDeadline } from './task-primitive/task-deadline'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { cn } from '@/shared/lib/css'
import { getStatus } from '@/shared/lib/map'
import { PropsWithClassName } from '@/shared/types/props.types'
import { TaskProps, TaskStatus } from '@/shared/types/task.types'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import { Button } from '@/shared/ui/other/button'
import { TaskDiffBadge } from '@/shared/ui/view/task-diff-badge'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import React, { PropsWithChildren } from 'react'

export const TaskPopover: React.FC<
	PropsWithChildren &
		PropsWithClassName & { item: TaskProps; isDashboard?: boolean }
> = ({ item, className, children, isDashboard = false }) => {
	return (
		<Popover>
			<PopoverTrigger className={className} asChild>
				{children}
			</PopoverTrigger>
			<PopoverContent
				align='start'
				side='right'
				className='flex w-[380px] flex-col gap-2 p-layout'
			>
				<div className='flex items-center justify-between'>
					<Title size='small'>{item.title}</Title>
					<TaskDiffBadge className='text-base' diff={item.difficulty} />
				</div>
				<Text size='small' color='gray' className='line-clamp-6'>
					{item.description}
				</Text>
				<TaskProgress item={item} />
				<TaskDeadline
					format='lll A'
					deadline={item.deadline!}
					extraCondition={isDashboard}
				/>
				<TaskCourse taskCourse={item.course!} />
				<div className='grid grid-cols-2 gap-3'>
					<WithCondition
						className='rounded-lg bg-indigo-200 p-2'
						condition={!!item.status}
						render={
							<div className='flex items-center gap-2'>
								<Text size='extraSmall' className=''>
									Статус:
								</Text>
								<Text
									size='extraSmall'
									className='line-clamp-2 break-words font-bold'
								>
									{getStatus<TaskStatus>(item.status!)}
								</Text>
							</div>
						}
					/>
					<WithCondition
						className='rounded-lg bg-indigo-200 p-2'
						condition={!!item.rating}
						render={
							<div className='flex items-center gap-2'>
								<Text size='extraSmall' className='self-start'>
									Рейтинг:
								</Text>
								<Text
									size='extraSmall'
									className='line-clamp-2 break-words font-bold'
								>
									{item.rating}
								</Text>
							</div>
						}
					/>
				</div>
				<div
					className={cn(
						'mt-auto flex',
						!item.course ? 'justify-between' : 'justify-end'
					)}
				>
					<WithCondition
						className='self-end'
						condition={!item.course}
						render={<Button variant={'outline'}>Удалить</Button>}
					/>

					<div className='mt-8 flex gap-3'>
						<Button>
							{item.completedMicrotasks !== 0 ? 'Продолжить' : 'Выполнить'}
						</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
