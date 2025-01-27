'use client'

import { useQueryManager } from '@/common/query'
import { routes } from '@/shared/config/routes'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { cn } from '@/shared/lib/css'
import { formatDate } from '@/shared/lib/dates/dates'
import { getBadgeByTaskType, getStatus } from '@/shared/lib/map'
import { TaskProps, TaskStatus } from '@/shared/types/task.types'
import { UiIcon } from '@/shared/ui/custom/ui-icon'
import { Button } from '@/shared/ui/other/button'
import { TaskDiffBadge } from '@/shared/ui/view/task-diff-badge'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CurrentTask: React.FC<{ task: TaskProps }> = ({ task }) => {
	useQueryManager()
	//TODO MB AND SIDEBAR FIXED
	return (
		<div className='flex h-full flex-col gap-3 p-layout'>
			<div className='flex items-center justify-between'>
				<Title size='large'>{task.title}</Title>
				<TaskDiffBadge diff={task.difficulty} className='text-xl' />
			</div>
			<div className='my-1'>
				<Text size='small' color='gray' className='mt-2'>
					{task.description}
				</Text>
			</div>

			<section className='mt-4 grid grid-cols-[300px_1fr_1fr] grid-rows-[1fr_auto] gap-3'>
				<WithCondition
					condition={!!task.course}
					className='rounded-lg bg-indigo-100 p-layout'
					render={
						<div className='group'>
							<Link
								href={routes.dashboard.student}
								className='flex cursor-pointer items-center justify-between'
							>
								Курс:{' '}
								<UiIcon className='transition-transform hover:text-zinc-950 group-hover:scale-105'>
									<ArrowUpRight />
								</UiIcon>
							</Link>
							<Title className='cursor-pointer'>{task.course}</Title>
						</div>
					}
				/>
				<WithCondition
					condition={!!task.teacher}
					className='rounded-lg bg-indigo-100 p-layout'
					render={
						<div>
							Преподаватель:
							<Title>{task.teacher}</Title>
						</div>
					}
				/>
				<WithCondition
					className='rounded-lg bg-indigo-100 p-layout'
					condition={!!task.status}
					render={
						<div>
							Статус:
							<Title>{getStatus<TaskStatus>(task.status!)}</Title>
						</div>
					}
				/>
				<WithCondition
					condition={!!(task.deadline || task.timeToComplete)}
					className='col-span-3 row-start-2 flex items-center justify-between gap-1 rounded-lg bg-indigo-100 p-layout'
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
									<div className='flex flex-col'>
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
					className='col-span-1 gap-1 rounded-lg bg-indigo-100 p-layout'
					render={
						<div>
							Студентов выполнило:
							<Title>{task.sutdentsComplete}</Title>
						</div>
					}
				/>
				<WithCondition
					condition={!!task.rating}
					className='col-span-1 gap-1 rounded-lg bg-indigo-100 p-layout'
					render={
						<div>
							Рейтинг:
							<Title>{task.rating}</Title>
						</div>
					}
				/>
				<WithCondition
					condition={!!task.type}
					className='col-span-1 gap-1 rounded-lg bg-indigo-100 p-layout'
					render={
						<div>
							Тип:
							<Title>{getBadgeByTaskType(task.type).text}</Title>
						</div>
					}
				/>
			</section>

			<section
				className={cn(
					'mt-auto flex gap-3',
					!task.course ? 'justify-between' : 'justify-end'
				)}
			>
				{!task.course && <Button variant={'outline'}>Удалить</Button>}
				<Link href={routes.tasks.complitionTask(task.id)}>
					<Button>Выполнить</Button>
				</Link>
			</section>
		</div>
	)
}
