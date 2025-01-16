'use client'

import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import Text from '@/shared/ui/view/text'
import {
	ArrowUpAZ,
	ClockArrowDown,
	FileDiff,
	LucideFileDiff
} from 'lucide-react'
import React from 'react'

export const SortPopover: React.FC<PropsWithClassName> = ({ className }) => {
	const layouts = [
		{ id: 1, label: 'Сложности', icon: <LucideFileDiff size={18} /> },
		{ id: 2, label: 'Названию', icon: <ArrowUpAZ size={18} /> },
		{ id: 3, label: 'Срочности', icon: <ClockArrowDown size={18} /> }
	]

	return (
		<Popover>
			<PopoverTrigger
				className={cn(
					'text-sm text-gray-500 font-semibold hover:text-primary flex gap-1 items-center',
					className
				)}
			>
				Сложность <FileDiff size={18} />
			</PopoverTrigger>
			<PopoverContent
				align='end'
				className='w-[150px] px-1 py-3 flex flex-col gap-2'
			>
				<section className='flex flex-col'>
					<Text className='font-bold px-2 pb-3 pt-2' size='extraSmall'>
						Сортировать по
					</Text>

					{layouts.map(layout => (
						<LayoutSwitchItem key={layout.id} icon={layout.icon}>
							{layout.label}
						</LayoutSwitchItem>
					))}
				</section>
			</PopoverContent>
		</Popover>
	)
}

interface LayoutSwitchItemProps extends PropsWithClassName {
	icon: React.ReactNode
	children: React.ReactNode
}

const LayoutSwitchItem: React.FC<LayoutSwitchItemProps> = ({
	children,
	icon,
	className
}) => {
	return (
		<div
			className={cn(
				'flex items-center font-medium hover:bg-destructive p-2 rounded-sm cursor-default  justify-between',
				className
			)}
		>
			<div className='flex justify-start gap-2 items-center'>
				{icon}
				<Text size='extraSmall'>{children}</Text>
			</div>
		</div>
	)
}
