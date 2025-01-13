'use client'

import { cn } from '@/shared/lib/css'
import { Layout, PropsWithClassName } from '@/shared/types/props.types'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import Text from '@/shared/ui/view/text'
import { Check, Grid, List } from 'lucide-react'
import React from 'react'

interface LayoutSwitchProps extends PropsWithClassName {
	activeLayout: Layout
	setActiveLayout: (value: Layout) => void
}

export const LayoutSwitch: React.FC<LayoutSwitchProps> = ({
	className,
	activeLayout,
	setActiveLayout
}) => {
	const layouts = [
		{ id: Layout.GRID, label: 'Стека', icon: <Grid size={18} /> },
		{ id: Layout.LIST as Layout, label: 'Список', icon: <List size={18} /> }
	]

	const onCLickLayoutSwitchItem = (layout: Layout) => {
		setActiveLayout(layout)
	}

	return (
		<Popover>
			<PopoverTrigger
				className={cn(
					'text-sm text-gray-500 font-semibold hover:text-primary flex gap-1 items-center',
					className
				)}
			>
				{activeLayout === layouts[0].id ? (
					<>
						Стека <Grid size={18} />
					</>
				) : (
					<>
						Список
						<List size={18} />
					</>
				)}
			</PopoverTrigger>
			<PopoverContent
				align='end'
				className='w-[150px] px-1 py-3 flex flex-col gap-2'
			>
				<section className='flex flex-col'>
					<Text className='font-bold px-2 pb-3 pt-2' size='extraSmall'>
						Показывать как
					</Text>

					{layouts.map(layout => (
						<LayoutSwitchItem
							key={layout.id}
							onClick={() => onCLickLayoutSwitchItem(layout.id)}
							isActive={activeLayout === layout.id}
							icon={layout.icon}
						>
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
	isActive?: boolean
	onClick: () => void
	children: React.ReactNode
}

const LayoutSwitchItem: React.FC<LayoutSwitchItemProps> = ({
	children,
	icon,
	className,
	isActive,
	onClick
}) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				'flex items-center font-medium hover:bg-destructive p-2 rounded-sm cursor-default  justify-between',
				className,
				isActive && 'text-indigo-700'
			)}
		>
			<div className='flex justify-start gap-2 items-center'>
				{icon}
				<Text size='extraSmall'>{children}</Text>
			</div>
			{isActive && <Check size={18} className='self-end' />}
		</div>
	)
}
