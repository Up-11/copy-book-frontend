import { dashboardTasks } from '@/shared/mock/mock'
import Text from '@/shared/ui/view/text'
import { ComplitionHeader } from '@/widgets/headers'
import { TaskComplitionPage } from '@/widgets/task'
import Image from 'next/image'

export async function generateMetadata({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const id = (await params).id
	const task = dashboardTasks[Number(id) - 1]

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
	console.log(id)
	const currentTask = dashboardTasks.find(task => task.id === id)

	if (!currentTask) {
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
					<Text>Задание не найдено</Text>
				</div>
			</div>
		)
	}

	return (
		<div>
			<ComplitionHeader title={currentTask.title} />
			<div className='mx-[20%] mt-20 flex min-h-[calc(100vh-80px)] flex-col'>
				<TaskComplitionPage task={currentTask} />
			</div>
		</div>
	)
}
