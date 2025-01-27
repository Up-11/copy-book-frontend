import { DragElementType } from '../types'
import { cn } from '@/shared/lib/css'
import { GripVertical } from 'lucide-react'
import React, { useState } from 'react'

export const DragElement: React.FC<{
	onDrag?: (data: DragElementType) => void
	data: DragElementType
}> = ({ data, onDrag }) => {
	const [isDragging, setIsDragging] = useState(false)

	const onDragStart = () => {
		setIsDragging(true)
		onDrag?.(data)
	}

	const onDragEnd = () => {
		setIsDragging(false)
	}

	return (
		<div
			className={cn(
				'group inline-flex items-center gap-1 rounded bg-indigo-100 p-1 transition-colors hover:cursor-grab hover:bg-indigo-200',
				isDragging && 'bg-indigo-200'
			)}
			draggable
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
		>
			<GripVertical
				size={16}
				className='opacity-50 transition-opacity group-hover:opacity-100'
			/>
			{data.text}
		</div>
	)
}
