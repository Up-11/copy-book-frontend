'use client'

import { CurrentEntity } from '@/common/current-entity'
import { ICurrentEntityProps } from '@/common/current-entity/types'
import { useQueryManager } from '@/common/query'
import { UserRole } from '@/shared/api/graphql/generated/output'
import { routes } from '@/shared/config/routes'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { cn } from '@/shared/lib/css'
import { formatDate } from '@/shared/lib/dates/dates'
import { getBadgeByTaskType, getStatus } from '@/shared/lib/map'
import { generateTaskLink } from '@/shared/lib/utils'
import { TaskProps, TaskStatus } from '@/shared/types/task.types'
import { UiIcon } from '@/shared/ui/custom/ui-icon'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Button } from '@/shared/ui/other/button'
import { TaskDiffBadge } from '@/shared/ui/view/task-diff-badge'
import Title from '@/shared/ui/view/title'
import { ShareSidebar } from '@/widgets/share/share-sidebar'
import { ArrowUpRight, Share } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CurrentTask: React.FC<{ task: TaskProps }> = ({ task }) => {
	useQueryManager()

	const url = generateTaskLink(task.id, UserRole.Student)

	const currentTask: ICurrentEntityProps = {
		title: task.title,
		description: task.description!,
		renderHeaderElement() {
			return (
				<div className='flex items-center gap-3'>
					<TaskDiffBadge diff={task.difficulty} className='text-xl' />
					<UiTooltip
						content='Поделиться'
						className='cursor-pointer rounded-md transition-colors hover:bg-secondary'
					>
						<ShareSidebar
							title={task.title}
							trigger={
								<Button size={'icon'} variant={'ghost'}>
									<Share />
								</Button>
							}
							qrUrl={url}
						/>
					</UiTooltip>
				</div>
			)
		},
		renderFooter() {
			return (
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
			)
		},

		items: [
			{
				name: 'Преподаватель',
				content: task.teacher
			},
			{
				name: 'Тип',
				content: getBadgeByTaskType(task.type).text,
				condition: !!task.type
			},
			{
				name: 'Рейтинг',
				content: task.rating
			},
			{
				name: 'Студентов выполнило',
				content: task.sutdentsComplete
			},
			{
				name: '	Статус',
				content: getStatus<TaskStatus>(task.status!)
			}
		],
		renderUnusualItems() {
			return (
				<>
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
													formatDate({
														date: task.deadline,
														format: 'LLL A',
														smartFormatting: { relativeFormatting: false }
													})}
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
				</>
			)
		}
	}
	//TODO MB AND SIDEBAR FIXED
	return <CurrentEntity {...currentTask} />
}
