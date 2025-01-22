'use client'

import { LayoutSwitch } from '@/entities/draft'
import { SearchBar } from '@/entities/search'
import { TaskFilter } from '@/features/filter'
import { useLayout } from '@/shared/model/use-layout'
import { Layout } from '@/shared/types/props.types'
import { Loader } from '@/shared/ui/view/loader'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import React from 'react'

export const PaginationPageLayout: React.FC<{
	isDraft?: boolean
	items: React.ReactNode
	layout: Layout
	isTask: boolean
}> = ({ isDraft, items, layout, isTask = true }) => {
	const { isHydrated, setActiveLayout } = useLayout()
	if (!isHydrated) {
		return (
			<div className='flex items-center flex-col justify-center h-[88vh]'>
				<Loader size={44} />
				<Text size='small'>Идет загрузка, пожалуйста подождите</Text>
			</div>
		)
	}
	return (
		<>
			<section className='flex justify-between mt-8 mb-4'>
				<Title>{isTask ? 'Все задания' : 'Все курсы'}</Title>
				<div className='flex items-center gap-3'>
					<SearchBar />
					<LayoutSwitch
						activeLayout={layout}
						setActiveLayout={setActiveLayout}
					/>
					{!isDraft && <TaskFilter isTask={isTask} />}
				</div>
			</section>
			<section
				className={
					layout === Layout.GRID
						? isTask
							? 'grid grid-cols-5 gap-3'
							: ' grid grid-cols-4 gap-5'
						: 'flex flex-col gap-3'
				}
			>
				{React.Children.map(items, child =>
					React.cloneElement(child as React.ReactElement, {
						isGrid: layout === Layout.GRID
					})
				)}
			</section>
		</>
	)
}
