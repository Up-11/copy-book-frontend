import React from 'react'

export const DragContainter: React.FC<{
	renderItems: () => React.ReactNode
	onDropBack: () => void
}> = ({ renderItems, onDropBack }) => {
	return (
		<div
			onDragOver={e => e.preventDefault()}
			onDrop={onDropBack}
			className='flex min-h-20 w-full flex-wrap items-start gap-2 rounded-sm border border-primary p-1'
		>
			{renderItems()}
		</div>
	)
}
