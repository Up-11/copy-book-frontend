'use client'

import { useLayout } from '@/shared/model/use-layout'
import { Layout } from '@/shared/types/props.types'
import { Card } from '@/shared/ui/card'
import { Checkbox } from '@/shared/ui/input/checkbox'
import { Label } from '@/shared/ui/input/label'
import { Skeleton } from '@/shared/ui/other/skeleton'
import { TitleWithSeparator } from '@/shared/ui/view/title-with-separator'
import React, { useState } from 'react'

type DisplayVariant = 'grid' | 'list'

export const ProfileSettings: React.FC = () => {
	const { layout, setActiveLayout } = useLayout()

	return (
		<div className='space-y-4'>
			<TitleWithSeparator title='Вариант отображения' />

			<div className='space-y-4'>
				<p className='text-sm text-gray-600'>
					Выберите предпочтительный способ отображения контента.
					<strong> Сетка</strong> - компактные карточки для быстрого просмотра.
					<strong> Список</strong> - линейное отображение для детального
					сравнения.
				</p>

				<div className='flex flex-col gap-4 sm:flex-row'>
					<div
						className={`flex-1 cursor-pointer rounded-lg border-2 p-3 transition-all ${
							layout === Layout.GRID
								? 'border-blue-500 bg-blue-50'
								: 'border-gray-200 bg-gray-50 hover:border-gray-300'
						}`}
						onClick={() => setActiveLayout(Layout.GRID)}
					>
						<div className='mb-2 flex items-center gap-2'>
							<Checkbox
								id='grid-view'
								checked={layout === Layout.GRID}
								className='h-3 w-3'
							/>
							<Label
								htmlFor='grid-view'
								className='cursor-pointer text-xs font-medium'
							>
								Сетка
							</Label>
						</div>
						<GridPreview />
					</div>

					<div
						className={`flex-1 cursor-pointer rounded-lg border-2 p-3 transition-all ${
							layout === Layout.LIST
								? 'border-blue-500 bg-blue-50'
								: 'border-gray-200 bg-gray-50 hover:border-gray-300'
						}`}
						onClick={() => setActiveLayout(Layout.LIST)}
					>
						<div className='mb-2 flex items-center gap-2'>
							<Checkbox
								id='list-view'
								checked={layout === Layout.LIST}
								className='h-3 w-3'
							/>
							<Label
								htmlFor='list-view'
								className='cursor-pointer text-xs font-medium'
							>
								Список
							</Label>
						</div>
						<ListPreview />
					</div>
				</div>
			</div>
		</div>
	)
}

const GridPreview: React.FC = () => {
	return (
		<div className='grid max-w-full grid-cols-3 gap-0.5'>
			{Array.from({ length: 3 }).map((_, index) => (
				<div
					key={index}
					className='aspect-square rounded border bg-white p-0.5'
				>
					<div className='flex h-full flex-col gap-0.5'>
						<Skeleton className='h-3/5 w-full rounded' />
						<div className='space-y-0.5'>
							<Skeleton className='h-4 w-full' />
							<Skeleton className='h-7 w-full' />
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

const ListPreview: React.FC = () => {
	return (
		<div className='flex h-[90%] flex-col justify-between'>
			{Array.from({ length: 3 }).map((_, index) => (
				<div
					key={index}
					className='flex items-center gap-1 rounded border bg-white p-0.5'
				>
					<Skeleton className='size-10 flex-shrink-0 rounded' />
					<div className='min-w-0 flex-1 space-y-0.5'>
						<Skeleton className='h-5 w-3/4' />
						<Skeleton className='h-3 w-1/2' />
					</div>
				</div>
			))}
		</div>
	)
}

export default ProfileSettings
