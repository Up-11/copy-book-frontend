import { useCourseCreation } from './model/use-course-creation'
import { MarkdownEditor } from '@/entities/markdown'
import { Alert, AlertTitle, AlertDescription } from '@/shared/ui/view/alert'
import { Info } from 'lucide-react'
import React from 'react'

export const CourseCreationDescription: React.FC = () => {
	const { getters, setters } = useCourseCreation()
	return (
		<div>
			<div className='flex flex-col gap-3'>
				<MarkdownEditor
					value={getters.description}
					setValue={setters.description}
				/>
				{!getters.id && (
					<Alert className='space-x-2' variant={'destructive'}>
						<Info className='h-4 w-4' />
						<AlertTitle className=''>Важно!</AlertTitle>
						<AlertDescription className=''>
							Чтобы добавить разделы и задания, необходимо сначала сохранить
							основную информацию о курсе и его описание. После создания вы
							сможете наполнить курс учебными материалами.
						</AlertDescription>
					</Alert>
				)}
			</div>
		</div>
	)
}
