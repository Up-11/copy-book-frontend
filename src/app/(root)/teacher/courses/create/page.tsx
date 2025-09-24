import { CourseCreation } from '@/features/create-course'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Создание Курса'
}

export default function Page() {
	return (
		<div>
			<CourseCreation />
		</div>
	)
}
