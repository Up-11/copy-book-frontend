import { cn } from '../../../../shared/lib/css'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { formatDate } from '@/shared/lib/dates/dates'
import { PropsWithClassName } from '@/shared/types/props.types'
import { Deadline } from '@/shared/types/task.types'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import Text from '@/shared/ui/view/text'
import React from 'react'

export const TaskDeadline: React.FC<
	PropsWithClassName & {
		deadline: Deadline
		format?: string
		extraCondition?: boolean
	}
> = ({ deadline, format, extraCondition, className }) => {
	return (
		<WithCondition
			condition={!!(deadline && extraCondition)}
			render={
				<UiTooltip
					content={formatDate({
						date: deadline,
						format: 'lll A',
						smartFormatting: {
							relativeFormatting: false
						}
					})}
				>
					<div
						className={cn(
							'mt-2 flex justify-start gap-1 rounded-lg bg-indigo-200 p-2',
							className
						)}
					>
						<Text size='small' className='self-start'>
							Срок сдачи:
						</Text>
						<Text size='small' className='line-clamp-2 break-words font-bold'>
							{formatDate({ date: deadline, format: format })}
						</Text>
					</div>
				</UiTooltip>
			}
		/>
	)
}
