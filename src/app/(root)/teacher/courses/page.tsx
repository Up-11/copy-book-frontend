import { CreatedCourses } from '@/widgets/course'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Созданные курсы'
}

export default function Page() {
	return <CreatedCourses />
}
