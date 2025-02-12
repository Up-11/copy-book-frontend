import { useTaskCreation } from '../model/use-task-creation'
import { MarkdownEditor } from '@/entities/markdown'
import { Modal } from '@/shared/ui/modals/modal'
import { Button } from '@/shared/ui/other/button'
import React from 'react'

export const CreationTaskDescription: React.FC = () => {
	const { getters, setters } = useTaskCreation()
	return (
		<div className='flex flex-col gap-3'>
			<Modal
				className='max-h-[90vh] min-w-[900px] !rounded-lg'
				title='Описание задания'
				content={
					<MarkdownEditor value={getters.description} setValue={setters.desc} />
				}
			>
				<Button size={'sm'} variant={'ghost'}>
					Открыть в модальном окне
				</Button>
			</Modal>
			<MarkdownEditor value={getters.description} setValue={setters.desc} />
		</div>
	)
}
