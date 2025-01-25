import { ComplitionCourseSidebar } from '@/features/complition-course'
import { courses } from '@/shared/mock/mock'
import { ComplitionHeader } from '@/widgets/headers'

export default async function StudentCourseLayout({
	children,
	params
}: {
	children: React.ReactNode
	params: Promise<{ id: string }>
}) {
	const id = (await params).id
	const course = courses[Number(id) - 1]

	return (
		<>
			<ComplitionHeader
				title={course.title}
				teacher={course.metadata.teacher}
			/>
			<ComplitionCourseSidebar courseId={id} />
			<div className='ml-80 mt-16'>
				<p>Текущий курс ID: {id}</p>
				{children}
			</div>
		</>
	)
}
