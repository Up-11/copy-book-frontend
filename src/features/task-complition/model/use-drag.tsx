import {
	dragElements,
	mockDropContainers
} from '@/entities/drag-and-drop/dnd-data'
import {
	DragElementType,
	DropContainerType
} from '@/entities/drag-and-drop/types'
import { useEffect, useState } from 'react'

export const useDrag = () => {
	const [elements, setElements] = useState<DragElementType[]>([])
	const [draggedElement, setDraggedElement] = useState<DragElementType | null>(
		null
	)
	const [dropContainers, setDropContainers] = useState<DropContainerType[]>(
		mockDropContainers.map(container => ({
			...container,
			draggedElements: []
		}))
	)

	const clearDropContainers = () => {
		setDropContainers(prev =>
			prev.map(container => ({
				...container,
				draggedElements: []
			}))
		)

		setElements(dragElements)
	}

	useEffect(() => {
		setElements(dragElements)
	}, [])

	const onDrag = (data: DragElementType): void => {
		setDraggedElement(data)
	}

	const onDrop = (containerId: string): void => {
		if (!draggedElement) return

		setDropContainers(prev =>
			prev.map(container => {
				if (container.id === containerId) {
					return {
						...container,
						draggedElements: container.draggedElements.includes(draggedElement!)
							? container.draggedElements
							: [...container.draggedElements, draggedElement!]
					}
				} else {
					return {
						...container,
						draggedElements: container.draggedElements.filter(
							el => el.id !== draggedElement!.id
						)
					}
				}
			})
		)

		setElements(prev => prev.filter(el => el.id !== draggedElement.id))
		setDraggedElement(null)
	}

	const onDropBack = (): void => {
		if (!draggedElement) return

		setDropContainers(prev =>
			prev.map(container => ({
				...container,
				draggedElements: container.draggedElements.filter(
					el => el.id !== draggedElement.id
				)
			}))
		)

		setElements(prev => [...prev, draggedElement])
		setDraggedElement(null)
	}

	return {
		drag: {
			onDrag,
			onDrop,
			onDropBack,
			elements,
			dropContainers,
			clearDropContainers
		}
	}
}
