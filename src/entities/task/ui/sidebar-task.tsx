import { TaskDifficultyDot } from './task-difficulty-dot'
import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { formatDate } from '@/shared/lib/dates/dates'
import { TaskProps } from '@/shared/types/task.types'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import Link from 'next/link'
import React from 'react'

export const SidebarTask: React.FC<
	Pick<
		TaskProps,
		'title' | 'difficulty' | 'description' | 'deadline' | 'id'
	> & {
		isActive?: boolean
	}
> = ({ title, difficulty, description, deadline, id, isActive }) => {
	return (
		<Link
			href={routes.tasks.currentUserTask(id)}
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
				{deadline && (
					<Text size='extraSmall' className='font-bold'>
						Срок сдачи: {formatDate({ date: deadline, format: 'DD.MM.YYYY' })}
					</Text>
				)}
			</div>
			<div className='flex justify-center'>
				<TaskDifficultyDot diff={difficulty} />
			</div>
		</Link>
	)
}
