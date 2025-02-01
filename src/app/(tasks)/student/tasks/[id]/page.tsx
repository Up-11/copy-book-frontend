import { dashboardTasks } from '@/shared/mock/mock'
import { Skeleton } from '@/shared/ui/other/skeleton'
import Text from '@/shared/ui/view/text'
import Image from 'next/image'
import { lazy, Suspense } from 'react'

const CurrentTask = lazy(() =>
	import('@/widgets/task').then(module => ({ default: module.CurrentTask }))
)

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
		<div className='page-h'>
			<Suspense fallback={<Skeleton className='h-full w-full' />}>
				<CurrentTask task={task} />
			</Suspense>
		</div>
	)
}
