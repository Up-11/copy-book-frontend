import { TaskCreation } from '@/features/create-task'
import Title from '@/shared/ui/view/title'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Создание задания'
}

export default function Page() {
	return (
		<div className='mb-4 mt-8'>
			<Title>Создание нового задания</Title>
			<div className='my-4'>
				<TaskCreation />
			</div>
		</div>
	)
}
