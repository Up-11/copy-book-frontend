import { CourseCreation } from '@/features/create-course'
import Title from '@/shared/ui/view/title'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Создание Курса'
}

export default function Page() {
	return (
		<div className='mb-4 mt-8'>
			<Title>Создание нового курса</Title>
			<div className='my-4'>
				<CourseCreation />
			</div>
		</div>
	)
}
