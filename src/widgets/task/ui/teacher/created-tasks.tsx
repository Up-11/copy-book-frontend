'use client'

import { dashboardTasks } from '../../../../shared/mock/mock'
import { PaginationPageLayout } from '@/common/layouts'
import { CreatedTasksItem } from '@/entities/task'
import { useLayout } from '@/shared/model/use-layout'
import React from 'react'

export const CreatedTasks: React.FC = () => {
	const { isGrid, layout } = useLayout()

	return (
		<PaginationPageLayout
			isTask
			isDraft
			layout={layout}
			items={dashboardTasks.slice(0, 10).map(task => (
				<CreatedTasksItem key={task.id} item={task} isGrid={isGrid} />
			))}
		/>
	)
}
