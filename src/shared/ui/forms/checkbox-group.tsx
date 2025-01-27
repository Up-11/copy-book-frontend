import { FilterType } from '../../../features/filter/types'
import { UiCheckbox } from '@/shared/ui/custom/ui-checkbox'
import { Button } from '@/shared/ui/other/button'
import { Skeleton } from '@/shared/ui/other/skeleton'
import Text from '@/shared/ui/view/text'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

interface Props {
	className?: string
	title?: string
	items: FilterType[]
	loading?: boolean
	onClickCheckbox?: (value: string) => void
	defaultValue?: string[]
	selected?: string[]
	name?: string
	limit?: number
	defaultItems?: FilterType[]
}

export const CheckBoxGroup: React.FC<Props> = ({
	items,
	loading,
	title,
	onClickCheckbox,
	selected,
	name,
	limit = 3,
	defaultItems
}) => {
	const [showAll, setShowAll] = React.useState(false)
	const list = showAll
		? items
		: limit === -1
			? defaultItems || items
			: (defaultItems || items).slice(0, limit)

	if (loading) {
		return (
			<div>
				<Text className='pb-1 pt-2 font-bold' size='small'>
					{title}
				</Text>{' '}
				{...Array(items.length)
					.fill(0)
					.map((_, index) => (
						<Skeleton key={index} className='mb-4 h-6 rounded-[8px]' />
					))}
			</div>
		)
	}
	return (
		<div className='flex flex-col gap-2'>
			{title && (
				<Text className='pb-1 pt-2 font-bold' size='small'>
					{title}
				</Text>
			)}
			<div className='scrollbar flex max-h-64 flex-col gap-1 overflow-auto'>
				{list.map((item, index) => (
					<UiCheckbox
						key={index}
						text={item.text}
						value={item.value}
						checked={selected?.includes(item.value)}
						name={name}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
					/>
				))}
			</div>

			{items.length > limit && limit !== -1 && (
				<Button
					variant={'outline'}
					size={'sm'}
					className='h-7 self-end border-none px-1.5 !text-xs font-bold !text-indigo-700 shadow-none'
					onClick={() => setShowAll(!showAll)}
				>
					{showAll ? (
						<>
							Скрыть <Minus />
						</>
					) : (
						<>
							Показать все <Plus />{' '}
						</>
					)}
				</Button>
			)}
		</div>
	)
}
