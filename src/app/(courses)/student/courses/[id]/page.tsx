import { courses } from '@/shared/mock/mock'
import Text from '@/shared/ui/view/text'
import { CurrentCourse } from '@/widgets/course/ui/student/current-course'
import Image from 'next/image'

export async function generateMetadata({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const id = (await params).id
	const course = courses[Number(id) - 1]

	if (!course) {
		return {
			title: 'Курс не найден'
		}
	}

	return {
		title: `${course.title}`
	}
}

export default async function CurrentTaskPage({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const id = (await params).id
	const course = courses[Number(id) - 1]

	if (!course) {
		return (
			<div className='page-h flex items-center justify-center p-layout'>
				<div className='flex flex-col items-center'>
					<Image
						className='w-48'
						src={'/assets/not-found-task.png'}
						width={400}
						height={400}
						alt='approve'
					/>
					<Text>Курс не найден</Text>
				</div>
			</div>
		)
	}

	return (
		<div className='page-h'>
			<CurrentCourse course={course} />
		</div>
	)
}
