import { Draft } from '../types'
import { DraftPopover } from './draft-popover'
import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import { AccentColorBlock } from '@/shared/ui/custom/accent-color-item'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import { ArrowDownRightFromSquare, EllipsisVertical } from 'lucide-react'
import React from 'react'

export const DraftItem: React.FC<
	Draft & PropsWithClassName & { isGrid: boolean; isDashboard?: boolean }
> = ({
	name,
	description,
	codeLines,
	isGrid = true,
	className,
	isDashboard = false
}) => {
	const listElement = () => (
		<div
			className={cn(
				'flex items-center justify-between bg-indigo-50 rounded-lg p-layout',
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
				{!isDashboard && (
					<DraftPopover isGrid={isGrid} className='self-start'>
						<div className='p-1 self-start hover:bg-secondary rounded-md transition-colors cursor-pointer'>
							<EllipsisVertical size={20} />
						</div>
					</DraftPopover>
				)}
			</div>
		</div>
	)

	const gridElement = () => (
		<div className='flex flex-col gap-2 items-start   bg-indigo-50 rounded-lg p-layout'>
			<div className='flex justify-between w-full'>
				<Text>{name}</Text>
				<DraftPopover isGrid={isGrid}>
					<div className='p-1  hover:bg-secondary rounded-md transition-colors cursor-pointer'>
						<EllipsisVertical size={20} />
					</div>
				</DraftPopover>
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
			<Button className='w-full'>
				Открыть черновик
				<ArrowDownRightFromSquare />
			</Button>
			<div>
				<p className='text-xs pl-2 '>last update: </p>
				<p className='text-xs pl-2 '>Создано: </p>
			</div>
		</div>
	)

	return isGrid ? gridElement() : listElement()
}
