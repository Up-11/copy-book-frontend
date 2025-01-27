export type DragElementType = {
	id: string
	text: string
}

export type DropContainerType = {
	id: string
	title: string
	draggedElements: DragElementType[]
}
