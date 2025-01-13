import Text from './text'
import { cn } from '@/shared/lib/css'
import { getBadgeByTaskDifficulty } from '@/shared/lib/utils'
import { TaskDifficulty } from '@/shared/types/task.types'
import React from 'react'

export const RoleBadge: React.FC<{ diff: TaskDifficulty }> = ({ diff }) => {
	const { text, classNames } = getBadgeByTaskDifficulty(diff)
	return (
		<div
			className={cn(
				'pointer-events-none inline-flex rounded-md border-2 p-1 px-6',
				classNames
			)}
		>
			<Text size='medium'> {text}</Text>
		</div>
	)
}
