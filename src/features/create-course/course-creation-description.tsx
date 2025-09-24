import { MarkdownEditor } from '@/entities/markdown'
import { Modal } from '@/shared/ui/modals/modal'
import { Button } from '@/shared/ui/other/button'
import React from 'react'

export const CourseCreationDescription: React.FC = () => {
	return (
		<div>
			<div className='flex flex-col gap-3'>
				<Modal
					className='max-h-[90vh] min-w-[900px] !rounded-lg'
					title='Описание задания'
					content={<MarkdownEditor />}
				>
					<Button size={'sm'} variant={'ghost'}>
						Открыть в модальном окне
					</Button>
				</Modal>
				<MarkdownEditor />
			</div>
		</div>
	)
}
