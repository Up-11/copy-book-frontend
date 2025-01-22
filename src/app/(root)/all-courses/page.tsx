import { AllCourses } from '@/widgets/course/ui/all-courses'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Все курсы'
}

export default function AllCoursesPage() {
	return <AllCourses />
}
