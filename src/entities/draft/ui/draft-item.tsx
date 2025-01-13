import { Draft } from '../types'
import { DraftItemPopover } from './draft-item-popover'
import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import { AccentColorBlock } from '@/shared/ui/custom/accent-color-item'
import Text from '@/shared/ui/view/text'
import { ArrowDownRightFromSquare, EllipsisVertical } from 'lucide-react'
import React from 'react'

export const DraftItem: React.FC<
	Draft & PropsWithClassName & { isGrid: boolean }
> = ({ name, description, codeLines, isGrid = true, className }) => {
	const listElement = () => (
		<div
			className={cn(
				'flex items-center justify-between bg-indigo-50 rounded-lg p-4',
				className
			)}
		>
			<div>
				<Text>{name}</Text>
				<Text color='gray' size='small'>
					{description}
				</Text>
			</div>
			<div className='flex items-center gap-4'>
				<AccentColorBlock>
					<div className='flex flex-col items-center'>
						<Text size='small' className='font-bold'>
							{codeLines.toString()}
						</Text>
						<Text size='extraSmall'>Строк кодa</Text>
					</div>
				</AccentColorBlock>
				<div className='p-1 hover:bg-secondary rounded-md transition-colors cursor-pointer'>
					<ArrowDownRightFromSquare />
				</div>
				<DraftItemPopover isGrid={isGrid} className='self-start'>
					<div className='p-1 self-start hover:bg-secondary rounded-md transition-colors cursor-pointer'>
						<EllipsisVertical size={20} />
					</div>
				</DraftItemPopover>
			</div>
		</div>
	)

	const gridElement = () => (
		<div className='flex flex-col gap-2 items-start h-96  bg-indigo-50 rounded-lg p-layout'>
			<div className='flex justify-between w-full'>
				<Text>{name}</Text>
				<DraftItemPopover isGrid={isGrid}>
					<div className='p-1  hover:bg-secondary rounded-md transition-colors cursor-pointer'>
						<EllipsisVertical size={20} />
					</div>
				</DraftItemPopover>
			</div>
			<div className='w-full'>
				<Text color='gray' size='small'>
					{description}
				</Text>
			</div>
			<div className='w-full'>
				<AccentColorBlock className='flex'>
					<div className='w-full flex gap-2 items-center'>
						<Text size='small' className='font-bold'>
							{codeLines.toString()}
						</Text>
						<Text size='small' className=''>
							Строк кода
						</Text>
					</div>
				</AccentColorBlock>
			</div>
			<div className='p-2 hover:bg-secondary justify-between flex gap-2 w-full mt-auto content-end rounded-md transition-colors cursor-pointer'>
				Открыть черновик
				<ArrowDownRightFromSquare />
			</div>
			<div>
				<p className='text-xs pl-2 '>last update: </p>
				<p className='text-xs pl-2 '>Создано: </p>
			</div>
		</div>
	)

	return isGrid ? gridElement() : listElement()
}
