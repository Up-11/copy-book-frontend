import { TaskCreation, TaskPreview } from '@/features/create-task'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Создание задания'
}

export default function Page() {
	return (
		<div className='mt-2 grid grid-cols-2 gap-10'>
			<TaskCreation />
			<TaskPreview />
		</div>
	)
}
