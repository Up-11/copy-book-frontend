import { cn } from '@/shared/lib/css'
import { getDotColorByTaskDifficulty } from '@/shared/lib/map'
import { TaskDifficulty } from '@/shared/types/task.types'
import React from 'react'

export const TaskDifficultyDot: React.FC<{ diff: TaskDifficulty }> = ({
	diff
}) => {
	const { classNames } = getDotColorByTaskDifficulty(diff)
	return <div className={cn('w-2 h-2 rounded-full', classNames)}></div>
}
