'use client'

import { useLayout } from '@/shared/model/use-layout'
import { Layout } from '@/shared/types/props.types'
import { Card } from '@/shared/ui/card'
import { Checkbox } from '@/shared/ui/input/checkbox'
import { Label } from '@/shared/ui/input/label'
import { Skeleton } from '@/shared/ui/other/skeleton'
import { TitleWithSeparator } from '@/shared/ui/view/title-with-separator'
import { useTheme } from 'next-themes'
import React, { useState } from 'react'

export const ProfileSettings: React.FC = () => {
	const { layout, setActiveLayout } = useLayout()
	const { theme, setTheme } = useTheme()

	return (
		<div className='space-y-8'>
			{/* --------------------- */}
			{/* Вариант отображения   */}
			{/* --------------------- */}
			<TitleWithSeparator title='Вариант отображения' />

			<div className='space-y-4'>
				<p className='text-sm text-gray-600'>
					Выберите предпочтительный способ отображения контента.
					<strong> Сетка</strong> — компактные карточки.
					<strong> Список</strong> — линейное отображение.
				</p>

				<div className='flex flex-col gap-4 sm:flex-row'>
					{/* GRID */}
					<div
						className={`flex-1 cursor-pointer rounded-lg border-2 p-3 transition-all ${
							layout === Layout.GRID
								? 'border-blue-500 bg-blue-50'
								: 'border-gray-200 bg-gray-50 hover:border-gray-300'
						}`}
						onClick={() => setActiveLayout(Layout.GRID)}
					>
						<div className='mb-2 flex items-center gap-2'>
							<Checkbox checked={layout === Layout.GRID} className='h-3 w-3' />
							<Label className='cursor-pointer text-xs font-medium'>
								Сетка
							</Label>
						</div>

						<GridPreview />
					</div>

					{/* LIST */}
					<div
						className={`flex-1 cursor-pointer rounded-lg border-2 p-3 transition-all ${
							layout === Layout.LIST
								? 'border-blue-500 bg-blue-50'
								: 'border-gray-200 bg-gray-50 hover:border-gray-300'
						}`}
						onClick={() => setActiveLayout(Layout.LIST)}
					>
						<div className='mb-2 flex items-center gap-2'>
							<Checkbox checked={layout === Layout.LIST} className='h-3 w-3' />
							<Label className='cursor-pointer text-xs font-medium'>
								Список
							</Label>
						</div>

						<ListPreview />
					</div>
				</div>
			</div>

			{/* --------------------- */}
			{/*      Тема сайта        */}
			{/* --------------------- */}
			<TitleWithSeparator title='Тема оформления' />

			<div className='space-y-4'>
				<p className='text-sm text-gray-600'>
					Выберите визуальную тему сайта.
					<strong> Светлая</strong> — стандартный светлый интерфейс.
					<strong> Тёмная</strong> — снижает напряжение глаз и подходит для
					ночного использования.
				</p>

				<div className='flex flex-col gap-4 sm:flex-row'>
					{/* LIGHT THEME */}
					<div
						className={`flex-1 cursor-pointer rounded-lg border-2 p-3 transition-all ${
							theme === 'light'
								? 'border-blue-500 bg-blue-50'
								: 'border-gray-200 bg-gray-50 hover:border-gray-300'
						}`}
						onClick={() => setTheme('light')}
					>
						<div className='mb-2 flex items-center gap-2'>
							<Checkbox checked={theme === 'light'} className='h-3 w-3' />
							<Label className='cursor-pointer text-xs font-medium'>
								Светлая тема
							</Label>
						</div>

						<LightThemePreview />
					</div>

					{/* DARK THEME */}
					<div
						className={`flex-1 cursor-pointer rounded-lg border-2 p-3 transition-all ${
							theme === 'dark'
								? 'border-blue-500 bg-blue-50'
								: 'border-gray-200 bg-gray-50 hover:border-gray-300'
						}`}
						onClick={() => setTheme('dark')}
					>
						<div className='mb-2 flex items-center gap-2'>
							<Checkbox checked={theme === 'dark'} className='h-3 w-3' />
							<Label className='cursor-pointer text-xs font-medium'>
								Тёмная тема
							</Label>
						</div>

						<DarkThemePreview />
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
const LightThemePreview = () => {
	return (
		<div className='rounded-lg border bg-white p-2 shadow-sm'>
			<div className='space-y-2'>
				<Skeleton className='h-5 w-1/3 bg-gray-200' />
				<Skeleton className='h-3 w-full bg-gray-200' />
				<Skeleton className='h-3 w-3/4 bg-gray-200' />
			</div>
		</div>
	)
}
const DarkThemePreview = () => {
	return (
		<div className='rounded-lg border bg-[#0d1117] p-2 shadow-sm'>
			<div className='space-y-2'>
				<Skeleton className='h-5 w-1/3 bg-gray-700' />
				<Skeleton className='h-3 w-full bg-gray-700' />
				<Skeleton className='h-3 w-3/4 bg-gray-700' />
			</div>
		</div>
	)
}

export default ProfileSettings
