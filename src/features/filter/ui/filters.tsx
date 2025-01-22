'use client'

import {
	courseFilter,
	courseStatusFilter,
	difficultyFilter,
	sortFilter,
	sortFilterCourse,
	taskStatusFilter,
	typeFilter
} from '../filter.data'
import { useFilters } from '../model/use-filters'
import { FilterGroup } from './filter-group'
import { RangeSlider } from './range-slider'
import { SwitchItem } from './switch-item'
import { cn } from '@/shared/lib/css'
import { isObjectEmpty } from '@/shared/lib/utils'
import { Input } from '@/shared/ui/input/input'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { ListFilterIcon, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

export const Filters: React.FC<{ isTask: boolean; isSidebar?: boolean }> = ({
	isTask,
	isSidebar = false
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const {
		clear,
		filters,
		handleCheckboxChange,
		updateFilter,
		updateRating,
		handleInputValue
	} = useFilters()

	return (
		<Popover onOpenChange={isOpen => setIsOpen(isOpen)} open={isOpen}>
			<PopoverTrigger className='flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-primary'>
				Фильтры <ListFilterIcon size={18} />
			</PopoverTrigger>
			<PopoverContent
				align='end'
				className={cn(
					'ml-20 flex flex-col p-layout',
					isTask ? 'w-[1000px]' : 'w-[800px]'
				)}
			>
				<Title className='font-bold' size='medium'>
					Фильтры
				</Title>
				<section>
					{isTask && (
						<div className='flex justify-between gap-5'>
							<div className='flex flex-col'>
								<Text className='pb-3 pt-2 font-bold' size='small'>
									Сортировать
								</Text>

								<div className='flex flex-col gap-2'>
									{sortFilter.map(item => (
										<SwitchItem
											className='items-center text-sm font-normal'
											key={item.value}
											onClick={() => updateFilter('sort', item.value, true)}
											icon={item.icon}
											isActive={filters.sort === item.value}
										>
											{item.text}
										</SwitchItem>
									))}
								</div>
							</div>
							<div className='flex gap-5'>
								<div className='grid grid-cols-2 grid-rows-[auto_auto] gap-x-5 gap-y-3'>
									<FilterGroup
										selected={filters.status}
										onClickCheckbox={handleCheckboxChange('status')}
										items={taskStatusFilter}
										title='Статус'
									/>
									<FilterGroup
										selected={filters.difficulty}
										onClickCheckbox={handleCheckboxChange('difficulty')}
										items={difficultyFilter}
										title='Сложность'
									/>
									<div className='col-span-2'>
										<Text className='pb-3 pt-2 font-bold' size='small'>
											Рейтинг
										</Text>
										<RangeSlider
											value={[filters.ratingFrom || 0, filters.ratingTo || 5]}
											onValueChange={updateRating}
											className='mt-3'
											min={0}
											max={5}
											step={0.1}
										/>
										<div className='flex gap-5'>
											<Input
												onChange={e =>
													handleInputValue(
														e.target.value.toString(),
														'ratingFrom'
													)
												}
												value={filters.ratingFrom || 0}
												step={0.1}
												min={0}
												max={filters.ratingTo || 5}
												type='number'
											/>
											<Input
												onChange={e =>
													handleInputValue(
														e.target.value.toString(),
														'ratingTo'
													)
												}
												value={filters.ratingTo || 5}
												min={filters.ratingFrom || 0}
												step={0.1}
												max={
													filters.ratingTo !== undefined ? filters.ratingTo : 5
												}
												type='number'
											/>
										</div>
									</div>
								</div>
								<div className='grid grid-cols-2'>
									<FilterGroup
										selected={filters.type}
										onClickCheckbox={handleCheckboxChange('type')}
										items={typeFilter}
										title='Тип задания'
									/>
									<FilterGroup
										selected={filters.course}
										onClickCheckbox={handleCheckboxChange('course')}
										items={courseFilter}
										title='Курсы'
										className='w-[300px]'
									/>
								</div>
							</div>
						</div>
					)}
					{!isTask && (
						<div className='flex gap-10'>
							<div className='flex w-[40%] flex-col'>
								<Text className='pb-3 pt-2 font-bold' size='small'>
									Сортировать
								</Text>

								<div className='flex flex-col gap-2'>
									{sortFilterCourse.map(item => (
										<SwitchItem
											className='flex items-center text-sm font-normal'
											key={item.value}
											onClick={() => updateFilter('sort', item.value, true)}
											icon={item.icon}
											isActive={filters.sort === item.value}
										>
											{item.text}
										</SwitchItem>
									))}
								</div>
							</div>

							<div className='w-[30%]'>
								<Text className='pb-3 pt-2 font-bold' size='small'>
									Рейтинг
								</Text>
								<RangeSlider
									value={[filters.ratingFrom || 0, filters.ratingTo || 5]}
									onValueChange={updateRating}
									className='mt-3'
									min={0}
									max={5}
									step={0.1}
								/>
								<div className='flex gap-5'>
									<Input
										onChange={e =>
											handleInputValue(e.target.value.toString(), 'ratingFrom')
										}
										value={filters.ratingFrom || 0}
										step={0.1}
										min={0}
										max={filters.ratingTo || 5}
										type='number'
									/>
									<Input
										onChange={e =>
											handleInputValue(e.target.value.toString(), 'ratingTo')
										}
										value={filters.ratingTo || 5}
										min={filters.ratingFrom || 0}
										step={0.1}
										max={filters.ratingTo !== undefined ? filters.ratingTo : 5}
										type='number'
									/>
								</div>
							</div>
							<FilterGroup
								className='w-[30%]'
								items={courseStatusFilter}
								selected={filters.status}
								onClickCheckbox={handleCheckboxChange('status')}
								title='Cтатус'
							/>
						</div>
					)}
					<div className='mt-10 flex justify-between gap-5'>
						<div>
							{!isSidebar && (
								<SwitchItem
									icon={<Sparkles size={20} />}
									onClick={() => updateFilter('aiCompilation', 'enabled', true)}
									className='flex items-center text-sm font-normal'
									wrapperClassName='border border-indigo-600 hover:bg-accent rounded-lg text-indigo-800 hover:text-indigo-700 hover:bg-indigo:700'
									isActive={filters.aiCompilation === 'enabled'}
								>
									Подобрать на основе ИИ
								</SwitchItem>
							)}
						</div>
						{!isObjectEmpty(filters) && (
							<div className='flex gap-5'>
								<Button variant='outline' onClick={clear} size='sm'>
									Очистить
								</Button>
								<Button size='sm' onClick={() => setIsOpen(false)}>
									Применить
								</Button>
							</div>
						)}
					</div>
				</section>
			</PopoverContent>
		</Popover>
	)
}
