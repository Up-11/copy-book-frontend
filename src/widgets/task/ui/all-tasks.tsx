'use client'

import { dashboardTasks } from '../../../shared/mock/mock'
import { PaginationPageLayout } from '@/common/layouts'
import { AllTasksItem } from '@/entities/task'
import { useLayout } from '@/shared/model/use-layout'
import React from 'react'

export const AllTasks: React.FC = () => {
	const { isGrid, layout } = useLayout()

	return (
		<PaginationPageLayout
			isTask
			layout={layout}
			items={dashboardTasks.map(task => (
				<AllTasksItem key={task.id} item={task} isGrid={isGrid} />
			))}
		/>
	)
}
