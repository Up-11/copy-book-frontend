'use client'

import { useDrag } from '../model/use-drag'
import { DragContainter, DragElement } from '@/entities/drag-and-drop'
import { DropContainer } from '@/entities/drag-and-drop/ui/drop-container'
import { Button } from '@/shared/ui/other/button'
import Title from '@/shared/ui/view/title'

export const DragAndDropAnswer: React.FC = () => {
	const { drag } = useDrag()
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex justify-between'>
				<Title>Перетащите блоки в соответствующие места</Title>
				<Button
					size={'sm'}
					variant={'primary'}
					onClick={drag.clearDropContainers}
				>
					Очистить
				</Button>
			</div>
			<div className='grid grid-cols-4 gap-2'>
				<div className='col-span-4'>
					<DragContainter
						onDropBack={drag.onDropBack}
						renderItems={() =>
							drag.elements.map(element => (
								<DragElement
									key={element.id}
									data={element}
									onDrag={drag.onDrag}
								/>
							))
						}
					/>
				</div>
				{drag.dropContainers.map(container => (
					<DropContainer
						key={container.id}
						onDrop={() => drag.onDrop(container.id)}
						title={container.title}
						renderItems={() =>
							container.draggedElements.map(element => (
								<DragElement
									key={element.id}
									data={element}
									onDrag={drag.onDrag}
								/>
							))
						}
					/>
				))}
			</div>
		</div>
	)
}
