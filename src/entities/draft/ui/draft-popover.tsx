import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import Text from '@/shared/ui/view/text'
import { SquarePen, Trash2 } from 'lucide-react'
import React, { PropsWithChildren } from 'react'

export const DraftPopover: React.FC<
	PropsWithChildren & PropsWithClassName & { isGrid: boolean }
> = ({ children, className, isGrid }) => {
	return (
		<Popover>
			<PopoverTrigger className={className}>{children}</PopoverTrigger>
			<PopoverContent align='end' className='w-44 px-1 py-3'>
				<section className='flex flex-col'>
					<DraftPopoverItem icon={<SquarePen size={20} />}>
						Поменять название
					</DraftPopoverItem>
					<DraftPopoverItem icon={<SquarePen size={20} />}>
						Поменять описание
					</DraftPopoverItem>
					<DraftPopoverItem
						className='text-red-500 '
						icon={<Trash2 className='place-self-end' size={20} />}
					>
						Удалить
					</DraftPopoverItem>
					{!isGrid && (
						<>
							<p className='text-xs pl-2 mt-1'>last update: </p>
							<p className='text-xs pl-2 '>Создано: </p>
						</>
					)}
				</section>
			</PopoverContent>
		</Popover>
	)
}
const DraftPopoverItem: React.FC<
	PropsWithChildren & PropsWithClassName & { icon: React.ReactNode }
> = ({ children, icon, className }) => {
	return (
		<div
			className={cn(
				'flex items-center hover:bg-destructive p-2 rounded cursor-pointer   justify-between font-semibold',
				className
			)}
		>
			<Text size='extraSmall'> {children}</Text> {icon}
		</div>
	)
}
