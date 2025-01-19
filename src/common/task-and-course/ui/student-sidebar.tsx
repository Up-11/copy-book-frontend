import { UserSidebar } from './user-sidebar'
import { routes } from '@/shared/config/routes'
import { dashboardTasks } from '@/shared/mock/mock'
import { TaskStatus } from '@/shared/types/task.types'
import React from 'react'

export const StudentSidebar: React.FC = () => {
	const tabsList = {
		mainTitle: 'Ваши задания',
		mainHref: routes.tasks.student,
		tabs: [
			{
				value: 'active',
				displayedName: 'Активные',
				itemsList: dashboardTasks.filter(
					task => task.status !== TaskStatus.Closed
				)
			},
			{
				value: 'archive',
				displayedName: 'Архив',
				itemsList: dashboardTasks.filter(
					task => task.status === TaskStatus.Closed
				)
			}
		]
	}

	return (
		<UserSidebar
			tabs={tabsList.tabs}
			mainHref={routes.tasks.student}
			mainTitle='Ваши задания'
		/>
	)
}
