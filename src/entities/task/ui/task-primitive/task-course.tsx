import { routes } from '@/shared/config/routes'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { TaskCourseType } from '@/shared/types/task.types'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import Text from '@/shared/ui/view/text'
import Link from 'next/link'
import React from 'react'

export const TaskCourse: React.FC<{ taskCourse: TaskCourseType }> = ({
	taskCourse
}) => {
	return (
		<WithCondition
			condition={!!taskCourse}
			render={
				<UiTooltip content={taskCourse}>
					<Link
						href={routes.dashboard.student}
						className='flex justify-start bg-indigo-200 p-2 rounded-lg gap-1 '
					>
						<Text size='small' className='self-start'>
							Курс:
						</Text>
						<Text size='small' className='font-bold line-clamp-2 break-words '>
							{taskCourse}
						</Text>
					</Link>
				</UiTooltip>
			}
		/>
	)
}
