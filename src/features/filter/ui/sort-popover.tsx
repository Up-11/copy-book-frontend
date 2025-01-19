'use client'

import { FilterType } from '../types'
import { SwitchItem } from './switch-item'
import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import Text from '@/shared/ui/view/text'
import { FileDiff } from 'lucide-react'
import React from 'react'

export const SortPopover: React.FC<
	PropsWithClassName & {
		onItemClick: (value: string) => void
		items: FilterType[]
		filters: { sort: string | null }
	}
> = ({ className, items, onItemClick, filters }) => {
	return (
		<Popover>
			<PopoverTrigger
				className={cn(
					'text-sm text-gray-500 font-semibold hover:text-primary flex gap-1 items-center',
					className
				)}
			>
				Сортировка <FileDiff size={18} />
			</PopoverTrigger>
			<PopoverContent align='end' className=' px-1 py-3 flex flex-col gap-2'>
				<section className='flex flex-col'>
					<Text className='font-bold px-2 pb-3 pt-2' size='extraSmall'>
						Сортировать по
					</Text>

					{items.map(item => (
						<SwitchItem
							key={item.value}
							onClick={() => onItemClick(item.value)}
							icon={item.icon}
							isActive={filters.sort === item.value}
						>
							{item.text}
						</SwitchItem>
					))}
				</section>
			</PopoverContent>
		</Popover>
	)
}
