'use client'

import { dashboardTasks } from '../../../shared/mock/mock'
import { SortPopover } from './sort-popover'
import { TaskList } from './task-list'
import { TaskStatus } from '@/shared/types/task.types'
import { SearchBar } from '@/shared/ui/custom/searchbar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/view/tabs'
import Title from '@/shared/ui/view/title'
import React from 'react'

export const UserTasksSidebar: React.FC = () => {
	return (
		<div className='p-layout '>
			<div className='ml-2 flex items-center justify-between'>
				<Title>Ваши задания</Title>
				<SortPopover />
			</div>
			<div className='ml-2 my-2 flex items-center justify-end'>
				<SearchBar />
			</div>
			<Tabs defaultValue='active'>
				<TabsList className='w-full'>
					<TabsTrigger value='active'>Активные</TabsTrigger>
					<TabsTrigger value='archive'>Архив</TabsTrigger>
				</TabsList>
				<TabsContent value='active'>
					<TaskList
						items={dashboardTasks.filter(
							task =>
								task.taskStatus != TaskStatus.Closed &&
								task.taskStatus != TaskStatus.NotStarted
						)}
					/>
				</TabsContent>
				<TabsContent value='archive'>
					<TaskList
						items={dashboardTasks.filter(
							task => task.taskStatus === TaskStatus.Closed
						)}
					/>
				</TabsContent>
			</Tabs>
		</div>
	)
}
