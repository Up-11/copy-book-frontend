import { dashboardTasks } from '@/shared/mock/mock'
import Text from '@/shared/ui/view/text'
import { CurrentTask } from '@/widgets/task'
import Image from 'next/image'

export async function generateMetadata({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const id = (await params).id
	const task = dashboardTasks[Number(id)]

	if (!task) {
		return {
			title: 'Задание не найдено'
		}
	}

	return {
		title: `${task.title}`
	}
}

export default async function CurrentTaskPage({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const id = (await params).id
	const task = dashboardTasks[Number(id)]

	if (!task) {
		return (
			<div className='p-layout flex justify-center items-center'>
				<div className='flex flex-col items-center'>
					<Image
						className='w-48'
						src={'/assets/not-found-task.png'}
						width={400}
						height={400}
						alt='approve'
					/>
					<Text>Задание не найдено</Text>
				</div>
			</div>
		)
	}

	return <CurrentTask task={task} />
}
