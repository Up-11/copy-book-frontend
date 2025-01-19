'use client'

import {
	courseFilter,
	difficultyFilter,
	sortFilter,
	statusFilter,
	typeFilter
} from '../filter.data'
import { useFilters } from '../model/use-filters'
import { useQueryFilters } from '../model/use-query-filters'
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
import { ListFilterIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export const TaskFilter: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { clear, filters, updateAll, handleCheckboxChange } = useFilters()

	const filtersFromUrl = useQueryFilters()

	useEffect(() => {
		updateAll(filtersFromUrl)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Popover onOpenChange={isOpen => setIsOpen(isOpen)} open={isOpen}>
			<PopoverTrigger className='text-sm text-gray-500 font-semibold hover:text-primary flex gap-1 items-center'>
				Фильтры <ListFilterIcon size={18} />
			</PopoverTrigger>
			<PopoverContent align='end' className='w-[1000px] p-layout flex flex-col'>
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
								{sortFilter.map(item => (
									<SwitchItem
										key={item.value}
										onClick={() => handleCheckboxChange('sort')(item.value)}
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
								selected={filters.status}
								onClickCheckbox={handleCheckboxChange('status')}
								items={statusFilter}
								title='Статус'
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
					<div className='flex justify-end mt-10 gap-5'>
						{!isObjectEmpty(filters) && (
							<>
								<Button variant='outline' onClick={clear} size='sm'>
									Очистить
								</Button>
								<Button size='sm' onClick={() => setIsOpen(false)}>
									Применить
								</Button>
							</>
						)}
					</div>
				</section>
			</PopoverContent>
		</Popover>
	)
}
