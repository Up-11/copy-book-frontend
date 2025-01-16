import { TaskProgress } from './task-progress'
import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { formatDate } from '@/shared/lib/dates/dates'
import { PropsWithClassName } from '@/shared/types/props.types'
import { DashboardTaskProps } from '@/shared/types/task.types'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Button } from '@/shared/ui/other/button'
import { TaskDiffBadge } from '@/shared/ui/view/task-diff-badge'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import Link from 'next/link'
import React from 'react'

export const DashboardTask: React.FC<
	{ item: DashboardTaskProps } & PropsWithClassName
> = ({ className, item }) => {
	return (
		<div
			className={cn(
				' flex flex-col gap-2 bg-indigo-50 rounded-lg p-layout',
				className
			)}
		>
			<div className='h-[35%]'>
				<div className='flex  justify-between gap-2 '>
					<Title size='medium' className='line-clamp-2'>
						{item.title}
					</Title>
					<TaskDiffBadge diff={item.difficulty} />
				</div>
				<div className=''>
					<Text color='gray' size='small'>
						{item.description}
					</Text>
				</div>
			</div>

			<TaskProgress item={item} />

			{item.deadline && (
				<UiTooltip
					content={formatDate({
						date: item.deadline,
						format: 'lll A',
						smartFormatting: {
							relativeFormatting: false
						}
					})}
				>
					<div className='flex justify-around bg-indigo-200 p-2 rounded-lg gap-1 cursor-default'>
						<Text size='small' className='self-end'>
							Срок сдачи:{' '}
						</Text>
						<Text size='small' className='font-bold'>
							{formatDate({ date: item.deadline })}
						</Text>
					</div>
				</UiTooltip>
			)}
			{item.TaskCourse && (
				<UiTooltip content={item.TaskCourse}>
					<Link
						href={routes.dashboard.student}
						className='flex justify-start bg-indigo-200 p-2 rounded-lg gap-1 mt-2'
					>
						<Text size='small' className='self-start'>
							Курс:
						</Text>
						<Text size='small' className='font-bold line-clamp-2 break-words '>
							{item.TaskCourse}
						</Text>
					</Link>
				</UiTooltip>
			)}
			<div className='flex justify-between mt-auto'>
				<Button variant='default'>Подробнее</Button>
				<Link href={routes.tasks.currentUserTask(item.id)}>
					<Button variant='outline'>Открыть</Button>
				</Link>
			</div>
		</div>
	)
}
