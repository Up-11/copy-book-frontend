'use client'

import { LayoutSwitch } from '@/entities/draft'
import { SearchBar } from '@/entities/search'
import { Filters } from '@/features/filter'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { useLayout } from '@/shared/model/use-layout'
import { Layout } from '@/shared/types/props.types'
import { Loader } from '@/shared/ui/view/loader'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import Image from 'next/image'
import React from 'react'

export const PaginationPageLayout: React.FC<{
	isDraft?: boolean
	items: React.ReactNode
	layout: Layout
	isTask: boolean
	filters?: React.ReactNode
}> = ({ isDraft, items, layout, isTask = true }) => {
	const { isHydrated, setActiveLayout } = useLayout()
	if (!isHydrated) {
		return (
			<div className='flex h-[88vh] flex-col items-center justify-center'>
				<Loader size={44} />
				<Text size='small'>Идет загрузка, пожалуйста подождите</Text>
			</div>
		)
	}
	return (
		<>
			<section className='mb-4 mt-8 flex justify-between'>
				<Title>{isTask ? 'Все задания' : 'Все курсы'}</Title>
				<div className='flex items-center gap-3'>
					<SearchBar />
					<LayoutSwitch
						activeLayout={layout}
						setActiveLayout={setActiveLayout}
					/>
					{!isDraft && <Filters isTask={isTask} />}
				</div>
			</section>
			<WithCondition
				condition={!!items}
				render={
					<section
						className={
							layout === Layout.GRID
								? isTask
									? 'grid grid-cols-5 gap-3'
									: 'grid grid-cols-4 gap-5'
								: 'flex flex-col gap-3'
						}
					>
						{React.Children.map(items, child =>
							React.cloneElement(child as React.ReactElement, {
								isGrid: layout === Layout.GRID
							})
						)}
					</section>
				}
				fallback={
					<div className='flex flex-col items-center justify-center'>
						<Image
							src={'/assets/empty.png'}
							alt='Список пуст'
							width={200}
							height={200}
							loading='lazy'
						/>
						<Text size='extraLarge' color='gray'>
							Тут пусто...
						</Text>
					</div>
				}
			/>
		</>
	)
}
