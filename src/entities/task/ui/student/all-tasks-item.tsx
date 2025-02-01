import { TaskPopover } from './task-popover'
import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { TaskProps, TaskStatus } from '@/shared/types/task.types'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Button } from '@/shared/ui/other/button'
import { TaskDiffBadge } from '@/shared/ui/view/task-diff-badge'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import {
	ArrowRightIcon,
	ArrowUpRight,
	Bookmark,
	CircleEllipsis
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const AllTasksItem: React.FC<{
	item: TaskProps
	isGrid: boolean
}> = ({ item, isGrid }) => {
	const listElement = () => {
		return (
			<div className='flex w-full justify-between rounded-lg bg-indigo-50 p-layout'>
				<div className='flex flex-col gap-1'>
					<div className='flex gap-2'>
						<Title>{item.title}</Title>
						<TaskDiffBadge diff={item.difficulty} />
						{item.status !== TaskStatus.NotStarted && (
							<UiTooltip
								content='Открыть'
								className='cursor-pointer rounded-md transition-colors hover:bg-secondary'
							>
								<Link
									href={routes.tasks.currentUserTask(item.id)}
									className='rounded-md p-1 hover:bg-secondary'
								>
									<ArrowUpRight size={20} />
								</Link>
							</UiTooltip>
						)}
					</div>
					<Text size='small' color='gray'>
						{item.description}
					</Text>
				</div>
				<div className='flex items-center gap-10'>
					<div className='flex gap-3'>
						<Button size={'sm'}>
							Выполнить <ArrowRightIcon />
						</Button>
					</div>
					<div className='flex flex-col gap-1'>
						<UiTooltip
							content='Добавить в мои задания'
							className='self-start'
							side='left'
						>
							<div className='cursor-pointer self-start rounded-md p-1 transition-colors hover:bg-secondary'>
								<Bookmark
									size={20}
									className={cn(
										item.status !== TaskStatus.NotStarted &&
											'border-primary fill-primary'
									)}
								/>
							</div>
						</UiTooltip>
						<UiTooltip
							side='left'
							content='Подробнее'
							className='self-start'
							hoverobleDisabled
						>
							<div>
								<TaskPopover item={item} isDashboard={false}>
									<div className='cursor-pointer self-start rounded-md p-1 transition-colors hover:bg-secondary'>
										<CircleEllipsis size={20} />
									</div>
								</TaskPopover>
							</div>
						</UiTooltip>
					</div>
				</div>
			</div>
		)
	}

	const gridElement = () => {
		return (
			<div className='flex flex-col gap-4 rounded-lg bg-indigo-50 p-layout'>
				<div className='flex w-full flex-col gap-2'>
					<div className='flex gap-2'>
						<Title size='small' className='line-clamp-2'>
							{item.title}
						</Title>
						<TaskDiffBadge diff={item.difficulty} className='px-1 text-xs' />
					</div>
					<Text size='small' color='gray' className='line-clamp-6'>
						{item.description}
					</Text>
				</div>
				<div className='mt-auto flex flex-col gap-2'>
					<Button size='sm' className='self flex w-full'>
						Выполнить <ArrowRightIcon />
					</Button>
					<div className='flex justify-center gap-3'>
						<UiTooltip
							content='Добавить в мои задания'
							className='cursor-pointer rounded-md transition-colors hover:bg-secondary'
						>
							<div className='rounded-md p-1 hover:bg-secondary'>
								<Bookmark
									size={20}
									className={cn(
										item.status !== TaskStatus.NotStarted &&
											'border-primary fill-primary'
									)}
								/>
							</div>
						</UiTooltip>

						<UiTooltip
							content='Подробнее'
							className='cursor-pointer rounded-md transition-colors hover:bg-secondary'
							side='top'
						>
							<TaskPopover item={item} isDashboard={false}>
								<div className='rounded-md p-1 hover:bg-secondary'>
									<CircleEllipsis size={20} />
								</div>
							</TaskPopover>
						</UiTooltip>
						{item.status !== TaskStatus.NotStarted && (
							<UiTooltip
								content='Открыть'
								className='cursor-pointer rounded-md transition-colors hover:bg-secondary'
							>
								<Link
									href={routes.tasks.currentUserTask(item.id)}
									className='rounded-md p-1 hover:bg-secondary'
								>
									<ArrowUpRight size={20} />
								</Link>
							</UiTooltip>
						)}
					</div>
				</div>
			</div>
		)
	}
	return isGrid ? gridElement() : listElement()
}
