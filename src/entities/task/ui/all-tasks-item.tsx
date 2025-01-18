import { TaskPopover } from './task-popover'
import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { TaskPageProps, TaskStatus } from '@/shared/types/task.types'
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
	item: TaskPageProps
	isGrid: boolean
}> = ({ item, isGrid }) => {
	const listElement = () => {
		return (
			<div className='flex w-full bg-indigo-50 rounded-lg justify-between p-layout'>
				<div className='flex flex-col gap-1'>
					<div className='flex gap-2'>
						<Title>{item.title}</Title>
						<TaskDiffBadge diff={item.difficulty} />
					</div>
					<Text size='small' color='gray'>
						{item.description}
					</Text>
				</div>
				<div className='flex items-center gap-10'>
					<div className='flex gap-3 '>
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
							<div className='p-1 self-start hover:bg-secondary rounded-md transition-colors cursor-pointer'>
								<Bookmark
									size={20}
									className={cn(
										item.taskStatus !== TaskStatus.NotStarted &&
											'fill-primary border-primary'
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
									<div className='p-1 self-start hover:bg-secondary rounded-md transition-colors cursor-pointer'>
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
			<div className='flex flex-col bg-indigo-50 rounded-lg p-layout gap-4'>
				<div className='flex flex-col gap-2 w-full'>
					<div className='flex  gap-2'>
						<Title size='small' className='line-clamp-2'>
							{item.title}
						</Title>
						<TaskDiffBadge diff={item.difficulty} className='text-xs px-1' />
					</div>
					<Text size='small' color='gray'>
						{item.description}
					</Text>
				</div>
				<div className='flex flex-col gap-2 mt-auto '>
					<Button size='sm' className='w-full flex  self'>
						Выполнить <ArrowRightIcon />
					</Button>
					<div className='flex gap-3 justify-center'>
						<UiTooltip
							content='Добавить в мои задания'
							className='hover:bg-secondary rounded-md transition-colors cursor-pointer'
						>
							<div className='p-1 hover:bg-secondary rounded-md'>
								<Bookmark
									size={20}
									className={cn(
										item.taskStatus !== TaskStatus.NotStarted &&
											'fill-primary border-primary'
									)}
								/>
							</div>
						</UiTooltip>

						<UiTooltip
							content='Подробнее'
							className='hover:bg-secondary rounded-md transition-colors cursor-pointer'
							side='top'
						>
							<TaskPopover item={item} isDashboard={false}>
								<div className='p-1 hover:bg-secondary rounded-md'>
									<CircleEllipsis size={20} />
								</div>
							</TaskPopover>
						</UiTooltip>
						{item.taskStatus !== TaskStatus.NotStarted && (
							<UiTooltip
								content='Открыть'
								className='hover:bg-secondary rounded-md transition-colors cursor-pointer'
							>
								<Link
									href={routes.tasks.currentUserTask(item.id)}
									className='p-1 hover:bg-secondary rounded-md'
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
