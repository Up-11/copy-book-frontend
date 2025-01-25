import { courseChapters, courses } from '@/shared/mock/mock'
import Text from '@/shared/ui/view/text'
import Image from 'next/image'

export async function generateMetadata({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const id = (await params).id
	const course = courses[Number(id) + 1]

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
	params: Promise<{ chapterId: string; id: string }>
}) {
	const chapterId = (await params).chapterId
	const id = (await params).id
	console.log(id, chapterId)

	const course = courseChapters[0]
	console.log(course)

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

	return <div className='h-full'>Часть курса{chapterId}</div>
}
