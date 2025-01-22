import { TaskProps } from '../../../shared/types/task.types'
import { cn } from '@/shared/lib/css'
import { getPercentFromNumber } from '@/shared/lib/utils'
import { CourseProgress } from '@/shared/types/course.types'
import { PropsWithClassName } from '@/shared/types/props.types'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Progress } from '@/shared/ui/input/progress'
import Text from '@/shared/ui/view/text'
import React from 'react'

const TaskProgress: React.FC<
	PropsWithClassName & {
		item: Pick<TaskProps, 'completedMicrotasks' | 'microtasksQuantity'>
	}
> = ({ item, className }) => {
	const percentOfCompletion = getPercentFromNumber(
		item.completedMicrotasks,
		item.microtasksQuantity
	)
	return (
		<UiTooltip
			content={`${item.completedMicrotasks}/${item.microtasksQuantity}`}
		>
			<div
				className={cn('flex flex-col items-center cursor-default ', className)}
			>
				<Text size='small'> Выполнено: {percentOfCompletion}%</Text>
				<Progress
					className='h-3'
					max={item.microtasksQuantity}
					value={item.completedMicrotasks}
				/>
			</div>
		</UiTooltip>
	)
}
const CourseProgressBar: React.FC<
	PropsWithClassName & {
		item: Pick<CourseProgress, 'itemsCompleted' | 'itemsQuantity'>
	}
> = ({ item, className }) => {
	const percentOfCompletion = getPercentFromNumber(
		item.itemsCompleted,
		item.itemsQuantity
	)
	return (
		<UiTooltip content={`${item.itemsCompleted}/${item.itemsQuantity}`}>
			<div
				className={cn('flex flex-col items-center cursor-default ', className)}
			>
				<Text size='small'> Выполнено: {percentOfCompletion}%</Text>
				<Progress
					className='h-3'
					max={item.itemsQuantity}
					value={item.itemsCompleted}
				/>
			</div>
		</UiTooltip>
	)
}

export { CourseProgressBar, TaskProgress }
