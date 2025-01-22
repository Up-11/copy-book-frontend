import { FilterType } from '../types'
import { UiCheckbox } from '@/shared/ui/custom/ui-checkbox'
import { Button } from '@/shared/ui/other/button'
import { Skeleton } from '@/shared/ui/other/skeleton'
import Text from '@/shared/ui/view/text'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

interface Props {
	className?: string
	title: string
	items: FilterType[]
	loading?: boolean
	onClickCheckbox?: (value: string) => void
	defaultValue?: string[]
	selected?: string[]
	name?: string
	limit?: number
	defaultItems?: FilterType[]
}

export const FilterGroup: React.FC<Props> = ({
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
	const list = showAll ? items : (defaultItems || items).slice(0, limit)

	if (loading) {
		return (
			<div>
				<Text className='font-bold  pb-1 pt-2' size='small'>
					{title}
				</Text>{' '}
				{...Array(items.length)
					.fill(0)
					.map((_, index) => (
						<Skeleton key={index} className='h-6 mb-4 rounded-[8px]' />
					))}
			</div>
		)
	}
	return (
		<div className='flex flex-col gap-2'>
			<Text className='font-bold  pb-1 pt-2' size='small'>
				{title}
			</Text>
			<div className='flex flex-col gap-1 max-h-64  overflow-auto scrollbar'>
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

			{items.length > limit && (
				<Button
					variant={'outline'}
					size={'sm'}
					className='self-end  !text-xs px-1.5 h-7 border-none !text-indigo-700 font-bold shadow-none'
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
