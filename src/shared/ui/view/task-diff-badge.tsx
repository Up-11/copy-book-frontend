import { cn } from '@/shared/lib/css'
import { getBadgeByTaskDifficulty } from '@/shared/lib/map'
import { PropsWithClassName } from '@/shared/types/props.types'
import { TaskDifficulty } from '@/shared/types/task.types'
import React from 'react'

export const TaskDiffBadge: React.FC<
	PropsWithClassName & { diff: TaskDifficulty }
> = ({ diff, className }) => {
	const { text, classNames } = getBadgeByTaskDifficulty(diff)
	return (
		<div
			className={cn(
				'pointer-events-none inline-flex text-xs rounded-xl border-2 p-1 px-4 self-start',
				classNames,
				className
			)}
		>
			<p className={cn('', className)}>{text}</p>
		</div>
	)
}
