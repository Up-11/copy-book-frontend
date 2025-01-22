import { ISidebar } from '../types'
import { UserSidebar } from './user-sidebar'
import { routes } from '@/shared/config/routes'
import { courses, dashboardTasks } from '@/shared/mock/mock'
import { Course } from '@/shared/types/course.types'
import { TaskProps, TaskStatus } from '@/shared/types/task.types'
import React from 'react'

export const StudentSidebar: React.FC<{ isTask: boolean }> = ({ isTask }) => {
	const taskTabsList: ISidebar<TaskProps[]> = {
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

	const courseTabsList: ISidebar<Course[]> = {
		mainTitle: 'Ваши Курсы',
		mainHref: routes.course.student,
		tabs: [
			{
				value: 'active',
				displayedName: 'Активные',
				itemsList: courses.slice(0, 2)
			},
			{
				value: 'archive',
				displayedName: 'Архив',
				itemsList: courses.slice(2, 4)
			}
		]
	}

	return (
		<UserSidebar<TaskProps[] | Course[]>
			tabs={isTask ? taskTabsList.tabs : courseTabsList.tabs}
			mainHref={isTask ? taskTabsList.mainHref : courseTabsList.mainHref}
			mainTitle={isTask ? taskTabsList.mainTitle : courseTabsList.mainTitle}
			isTask={isTask}
		/>
	)
}
//TODO ПОдумать как это можно переписать
