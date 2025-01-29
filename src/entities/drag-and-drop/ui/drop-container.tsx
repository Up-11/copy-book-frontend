import Text from '@/shared/ui/view/text'
import React from 'react'

export const DropContainer: React.FC<{
	title: string
	renderItems: () => React.ReactNode
	onDrop: () => void
}> = ({ title, renderItems, onDrop }) => {
	return (
		<section className='flex min-h-44 w-full flex-col rounded-sm border border-primary'>
			<header className='flex w-full items-center justify-center rounded-tl-sm rounded-tr-sm bg-indigo-50 p-1'>
				<Text size='small' className='select-none text-center'>
					{title}
				</Text>
			</header>
			<div
				className='flex h-full flex-wrap items-start justify-start gap-2 p-1'
				onDragOver={e => e.preventDefault()}
				onDrop={onDrop}
			>
				{renderItems()}
			</div>
		</section>
	)
}
