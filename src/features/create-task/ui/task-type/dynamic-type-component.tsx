import { TaskType } from '@/shared/types/task.types'
import React from 'react'

export const DynamicTypeComponent: React.FC<{ type?: TaskType }> = ({
	type
}) => {
	if (type === undefined) return null

	const components = {
		[TaskType.ChooseAnswer]: <div>123</div>,
		[TaskType.DragAndDrop]: <div>456</div>,
		[TaskType.Code]: <div>09123</div>,
		[TaskType.Theory]: null,
		[TaskType.WriteAnswer]: <div>=2-01930-1</div>
	}

	return <>{components[type]}</>
}
