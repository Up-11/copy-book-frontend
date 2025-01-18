'use client'

import { dashboardTasks } from '../../../shared/mock/mock'
import { LayoutSwitch } from '@/entities/draft'
import { SearchBar } from '@/entities/search/ui/searchbar'
import { AllTasksItem } from '@/entities/task'
import { TaskFilter } from '@/features/filter'
import { useLayout } from '@/shared/model/use-layout'
import { Layout } from '@/shared/types/props.types'
import { Loader } from '@/shared/ui/view/loader'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import React from 'react'

export const AllTasks: React.FC = () => {
	const { isHydrated, layout, setActiveLayout } = useLayout()
	if (!isHydrated) {
		return (
			<div className='flex items-center flex-col justify-center h-[88vh] '>
				<Loader size={44} />
				<Text size='small'>Задания загружаются, пожалуйста подождите</Text>
			</div>
		)
	}
	return (
		<>
			{' '}
			<section className='flex justify-between  mt-8 mb-4'>
				<Title>Все задания</Title>
				<div className='flex items-center gap-3'>
					<SearchBar />
					<LayoutSwitch
						activeLayout={layout}
						setActiveLayout={setActiveLayout}
					/>
					<TaskFilter />
				</div>
			</section>
			<section
				className={
					layout === Layout.GRID
						? 'grid grid-cols-5 gap-3'
						: 'flex flex-col gap-3'
				}
			>
				{dashboardTasks.map(task => (
					<AllTasksItem
						key={task.id}
						item={task}
						isGrid={layout === Layout.GRID}
					/>
				))}
			</section>
		</>
	)
}
