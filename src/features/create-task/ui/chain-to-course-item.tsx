import { cn } from '@/shared/lib/css'
import Text from '@/shared/ui/view/text'
import { Check } from 'lucide-react'
import { renderToReadableStream } from 'next/dist/server/app-render/entry-base'

interface BaseItem {
	id: string
	title: string
}

interface Props<T extends BaseItem> {
	item: T
	isSelected?: boolean
	smallText?: string
	onClick?: (item: T) => void
	icon?: React.ReactNode
	selectedClassName?: string
	defaultClassName?: string
	selectedTextColor?: string
	selectedIconColor?: string
	renderRight?: React.ReactNode
}

export const ChainToCourseItem = <T extends BaseItem>({
	item,
	isSelected,
	smallText,
	onClick,
	icon,
	selectedClassName = 'border-blue-500 bg-blue-50 ',
	defaultClassName = 'border-gray-200 bg-white',
	selectedTextColor = 'text-blue-600',
	selectedIconColor = 'text-blue-500',
	renderRight
}: Props<T>) => {
	return (
		<div
			className={cn(
				'cursor-pointer rounded-lg border p-4 transition-all',
				isSelected ? selectedClassName : defaultClassName
			)}
			onClick={() => onClick?.(item)}
		>
			<div className='flex items-start gap-3'>
				{icon && (
					<div
						className={cn(
							'mt-1',
							isSelected ? selectedIconColor : 'text-gray-400'
						)}
					>
						{icon}
					</div>
				)}
				<div className='flex-1'>
					<Text className='font-semibold'>{item.title}</Text>
					<Text size='small' color='gray' className='mt-1'>
						{smallText}
					</Text>
					{isSelected && (
						<div className='mt-2 flex items-center gap-1'>
							<Check className={cn('h-4 w-4', selectedIconColor)} />
							<Text size='extraSmall' className={selectedTextColor}>
								Выбрано (кликните чтобы отменить)
							</Text>
						</div>
					)}
				</div>
				{renderRight}
			</div>
		</div>
	)
}

export const ChainToCourseItemSkeleton = () => {
	return (
		<div className='cursor-pointer rounded-lg border p-4 transition-all'>
			<div className='flex items-start gap-3'>
				<div className='mt-1'>
					<div className='h-4 w-4 rounded-full bg-gray-200' />
				</div>
				<div className='flex-1'>
					<div className='h-4 w-48 rounded-full bg-gray-200' />
					<div className='mt-1 h-4 w-48 rounded-full bg-gray-200' />
				</div>
			</div>
		</div>
	)
}
