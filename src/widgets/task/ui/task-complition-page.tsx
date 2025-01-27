import { DynamicTaskComponent } from '@/features/task-complition'
import { cn } from '@/shared/lib/css'
import { getBadgeByTaskType } from '@/shared/lib/map'
import { Task } from '@/shared/types/task.types'
import { Button } from '@/shared/ui/other/button'
import { TaskDiffBadge } from '@/shared/ui/view/task-diff-badge'
import Text from '@/shared/ui/view/text'
import React from 'react'

export const TaskComplitionPage: React.FC<{ task: Task }> = ({ task }) => {
	return (
		<>
			<main className='flex flex-grow flex-col gap-4'>
				<section className='flex items-center justify-between'>
					<Text size='small' color='gray'>
						{getBadgeByTaskType(task?.type).text}
					</Text>
					{task?.difficulty && <TaskDiffBadge diff={task.difficulty} />}
				</section>
				<section className='flex flex-col items-center justify-center'>
					<Text size='small' className='self-start'>
						{task?.description}
					</Text>
				</section>
				<section className='mt-5'>
					<DynamicTaskComponent type={task?.type} />
				</section>
			</main>
			<footer
				className={cn(
					'mb-4 mt-auto flex',
					!task?.course ? 'justify-between' : 'justify-end'
				)}
			>
				{!task?.course && <Button>Отменить выполнение</Button>}
				<Button>Сдать</Button>
			</footer>
		</>
	)
}
