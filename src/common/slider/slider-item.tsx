import './slider.styles.css'
import { cn } from '@/shared/lib/css'
import { getBadgeByTaskType, getStatus } from '@/shared/lib/map'
import { CourseChapter } from '@/shared/types/course.types'
import { MicroTasks, TaskStatus } from '@/shared/types/task.types'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'

export const SliderMicroTaskItem: React.FC<{ item: MicroTasks }> = ({
	item
}) => {
	//TODO REFACTOR THIS
	return (
		<div
			className={cn(
				'flex h-full cursor-default select-none flex-col rounded-md bg-accent p-2',
				item.status === TaskStatus.Closed && 'bg-green-100',
				item.status === TaskStatus.Active && 'bg-amber-50',
				item.status === TaskStatus.Pending && 'bg-cyan-50'
			)}
		>
			<div className='flex items-center justify-between'>
				<Title size='small'> {item.title}</Title>
				<Text size='extraSmall' className='font-bold'>
					{getStatus(item.status!)}
				</Text>
			</div>
			<Text size='extraSmall'> {item.description}</Text>
			<div className='mt-auto flex justify-end'>
				<Text size='extraSmall' className='font-bold'>
					{getBadgeByTaskType(item.type!).text}
				</Text>
			</div>
		</div>
	)
}

export const SliderChapterItem: React.FC<{ item: CourseChapter }> = ({
	item
}) => {
	return (
		<div
			className={cn(
				'flex h-full cursor-default select-none flex-col rounded-md bg-accent p-2',
				item.status === TaskStatus.Closed && 'bg-green-100',
				item.status === TaskStatus.Active && 'bg-amber-50',
				item.status === TaskStatus.Pending && 'bg-cyan-50'
			)}
		>
			<div className='flex items-center justify-between'>
				<Title size='small'> {item.title}</Title>
				<Text size='extraSmall' className='font-bold'>
					{getStatus(item.status!)}
				</Text>
			</div>
		</div>
	)
}
