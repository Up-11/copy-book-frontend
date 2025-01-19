import { TaskProgress } from '@/entities/task/ui/task-progress'
import { routes } from '@/shared/config/routes'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { cn } from '@/shared/lib/css'
import { formatDate } from '@/shared/lib/dates/dates'
import { getTaskStatus } from '@/shared/lib/map'
import { TaskProps } from '@/shared/types/task.types'
import { UiIcon } from '@/shared/ui/custom/ui-icon'
import { Button } from '@/shared/ui/other/button'
import { TaskDiffBadge } from '@/shared/ui/view/task-diff-badge'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CurrentTask: React.FC<{ task: TaskProps }> = ({ task }) => {
	//TODO: Сделать отдельный компонент для отображения такого блоков
	return (
		<div className='p-layout flex flex-col h-full'>
			<div className='flex justify-between items-center'>
				<Title size='large'>{task.title}</Title>
				<TaskDiffBadge diff={task.difficulty} className='text-xl' />
			</div>
			<div className='my-4'>
				<Text size='small' color='gray' className='mt-2'>
					{task.description}
				</Text>
			</div>
			<div className='col-span-3 mb-4'>
				<TaskProgress className='w-full' item={task} />
			</div>
			<section className='grid grid-rows-[1fr_auto] grid-cols-[300px_1fr_1fr] mt-4 gap-3'>
				<WithCondition
					condition={!!task.course}
					className='bg-indigo-100 p-layout rounded-lg '
					render={
						<div className='group'>
							<Link
								href={routes.dashboard.student}
								className='flex justify-between items-center  cursor-pointer '
							>
								Курс:{' '}
								<UiIcon className='hover:text-zinc-950  group-hover:scale-105 transition-transform'>
									<ArrowUpRight />
								</UiIcon>
							</Link>
							<Title className='cursor-pointer'>{task.course}</Title>
						</div>
					}
				/>
				<WithCondition
					condition={!!task.teacher}
					className='bg-indigo-100 p-layout rounded-lg'
					render={
						<div>
							Преподаватель:
							<Title>{task.teacher}</Title>
						</div>
					}
				/>
				<WithCondition
					className='bg-indigo-100 p-layout rounded-lg'
					condition={!!task.status}
					render={
						<div>
							Статус:
							<Title>{getTaskStatus(task.status!)}</Title>
						</div>
					}
				/>
				<WithCondition
					condition={!!(task.deadline || task.timeToComplete)}
					className='bg-indigo-100 justify-between flex items-center gap-1 p-layout rounded-lg row-start-2 col-span-3'
					render={
						<>
							<WithCondition
								condition={!!task.deadline}
								render={
									<div>
										Срок сдачи:
										<Title>
											{task.deadline &&
												formatDate({ date: task.deadline, format: 'LLL A' })}
										</Title>
									</div>
								}
							/>
							<WithCondition
								condition={!!task.timeToComplete}
								render={
									<div className=' flex flex-col'>
										Время на выполнение ограничено:{' '}
										<Title className={cn(task.deadline ? 'self-end' : '')}>
											{task.timeToComplete}
										</Title>
									</div>
								}
							/>
						</>
					}
				/>
				<WithCondition
					condition={!!task.sutdentsComplete}
					className='bg-indigo-100  gap-1 p-layout rounded-lg  col-span-1'
					render={
						<div>
							Студентов выполнило:
							<Title>{task.sutdentsComplete}</Title>
						</div>
					}
				/>
				<WithCondition
					condition={!!task.rating}
					className='bg-indigo-100  gap-1 p-layout rounded-lg  col-span-1 '
					render={
						<div>
							Рейтинг:
							<Title>{task.rating}</Title>
						</div>
					}
				/>
			</section>
			<section
				className={cn(
					' flex mt-auto gap-3  ',
					!task.course ? ' justify-between' : 'justify-end'
				)}
			>
				{!task.course && <Button variant={'outline'}>Удалить</Button>}
				<Button>
					{task.completedMicrotasks != 0 ? 'Продолжить' : 'Выполнить'}
				</Button>
			</section>
		</div>
	)
}
