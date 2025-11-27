import { useTaskCreation } from '../model/use-task-creation'
import { MarkdownEditor } from '@/entities/markdown'
import React from 'react'

export const CreationTaskDescription: React.FC = () => {
	const { getters, setters } = useTaskCreation()
	return (
		<div className='flex flex-col gap-3'>
			<MarkdownEditor value={getters.description} setValue={setters.desc} />
		</div>
	)
}
