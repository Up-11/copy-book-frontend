import { ChooseAnswerCreation } from '../types-creation/choose-answer-creation'
import { TaskType } from '@/shared/types/task.types'
import React from 'react'

export const DynamicTypeComponent: React.FC<{ type?: TaskType }> = ({
	type
}) => {
	if (type === undefined) return null

	const components = {
		[TaskType.ChooseAnswer]: <ChooseAnswerCreation />,
		[TaskType.Code]: null,
		[TaskType.Theory]: null,
		[TaskType.WriteAnswer]: null
	}

	return <>{components[type]}</>
}
