import { DashboardTaskProps } from '../../../shared/types/task.types'
import { cn } from '@/shared/lib/css'
import { getPercentFromNumber } from '@/shared/lib/utils'
import { PropsWithClassName } from '@/shared/types/props.types'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Progress } from '@/shared/ui/input/progress'
import Text from '@/shared/ui/view/text'
import React from 'react'

export const TaskProgress: React.FC<
	PropsWithClassName & {
		item: Pick<DashboardTaskProps, 'completedMicrotasks' | 'microtasksQuantity'>
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
				<Text size='small'> {percentOfCompletion}%</Text>
				<Progress
					className='h-3'
					max={item.microtasksQuantity}
					value={item.completedMicrotasks}
				/>
			</div>
		</UiTooltip>
	)
}
