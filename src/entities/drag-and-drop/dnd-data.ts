import { DragElementType, DropContainerType } from './types'

export const dragElements: DragElementType[] = [
	{ id: '1', text: 'JavaScript' },
	{ id: '2', text: 'Python' },
	{ id: '3', text: 'C++' },
	{ id: '4', text: 'Java' },
	{ id: '5', text: 'Ruby' },
	{ id: '6', text: 'Apple' },
	{ id: '7', text: 'Banana' },
	{ id: '8', text: 'Orange' },
	{ id: '9', text: 'Grapes' },
	{ id: '10', text: 'Mango' },
	{ id: '11', text: 'Toyota' },
	{ id: '12', text: 'Ford' },
	{ id: '13', text: 'BMW' },
	{ id: '14', text: 'Tesla' },
	{ id: '15', text: 'Mercedes' }
]
export const mockDropContainers: Omit<DropContainerType, 'draggedElements'>[] = [
	{ id: 'Programming Langs', title: 'ЯП' },
	{ id: 'Fruits ', title: 'Фрукты' },
	{ id: 'Cars ', title: 'Автомобили' }
]
