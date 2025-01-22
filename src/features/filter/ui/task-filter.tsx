'use client'

import {
	courseFilter,
	difficultyFilter,
	sortFilter,
	sortFilterCourse,
	taskStatusFilter,
	typeFilter
} from '../filter.data'
import { useFilters } from '../model/use-filters'
import { FilterGroup } from './filter-group'
import { SwitchItem } from './switch-item'
import { isObjectEmpty } from '@/shared/lib/utils'
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

export const TaskFilter: React.FC<{ isTask: boolean; isSidebar?: boolean }> = ({
	isTask,
	isSidebar = false
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const { clear, filters, handleCheckboxChange, updateFilter } = useFilters()

	return (
		<Popover onOpenChange={isOpen => setIsOpen(isOpen)} open={isOpen}>
			<PopoverTrigger className='text-sm text-gray-500 font-semibold hover:text-primary flex gap-1 items-center'>
				Фильтры <ListFilterIcon size={18} />
			</PopoverTrigger>
			<PopoverContent
				align='end'
				className='w-[1000px] p-layout flex flex-col ml-20'
			>
				<Title className='font-bold' size='medium'>
					Фильтры
				</Title>
				<section>
					<div className='flex justify-between'>
						<div className='flex flex-col'>
							<Text className='font-bold pb-3 pt-2' size='small'>
								Сортировать
							</Text>

							<div className=' flex flex-col gap-2'>
								{isTask
									? sortFilter.map(item => (
											<SwitchItem
												className='text-sm font-normal flex items-center'
												key={item.value}
												onClick={() => updateFilter('sort', item.value, true)}
												icon={item.icon}
												isActive={filters.sort === item.value}
											>
												{item.text}
											</SwitchItem>
										))
									: sortFilterCourse.map(item => (
											<SwitchItem
												className='text-sm font-normal flex items-center'
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
						<div className='flex gap-10'>
							<FilterGroup
								selected={filters.status}
								onClickCheckbox={handleCheckboxChange('status')}
								items={taskStatusFilter}
								title='Статус'
							/>
							{isTask && (
								<>
									<FilterGroup
										selected={filters.difficulty}
										onClickCheckbox={handleCheckboxChange('difficulty')}
										items={difficultyFilter}
										title='Сложность'
									/>
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
								</>
							)}
						</div>
					</div>
					<div className='flex justify-between mt-10 gap-5'>
						<div>
							{!isSidebar && (
								<SwitchItem
									icon={<Sparkles size={20} />}
									onClick={() => updateFilter('aiCompilation', 'enabled', true)}
									className='text-sm font-normal flex items-center   '
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
