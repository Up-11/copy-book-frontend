import { TeacherTaskPopover } from './teacher-task-popover'
import { getPrivacy } from '@/shared/lib/map'
import { TaskProps } from '@/shared/types/task.types'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Button } from '@/shared/ui/other/button'
import { TaskDiffBadge } from '@/shared/ui/view/task-diff-badge'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { CircleEllipsis } from 'lucide-react'
import React from 'react'

export const CreatedTasksItem: React.FC<{
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
						<Text
							className='mt-2 select-none font-semibold'
							size='extraSmall'
							color='indigo'
						>
							{getPrivacy(item.privacy)}
						</Text>
					</div>
					<Text size='small' color='gray' className='line-clamp-2'>
						{item.description}
					</Text>
				</div>
				<div className='flex items-center gap-10'>
					<div className='flex gap-3'>
						<Button size={'sm'}>Редактировать</Button>
					</div>
					<div className='flex flex-col gap-1'>
						<UiTooltip
							side='left'
							content='Подробнее'
							className='self-start'
							hoverobleDisabled
						>
							<div>
								<TeacherTaskPopover item={item} isDashboard={false}>
									<div className='cursor-pointer self-start rounded-md p-1 transition-colors hover:bg-secondary'>
										<CircleEllipsis size={20} />
									</div>
								</TeacherTaskPopover>
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
				<div className='mt-auto'>
					<div className='flex gap-2'>
						<Button size='sm' className='self flex w-full'>
							Редактировать
						</Button>
						<div className='flex items-center justify-center gap-3'>
							<UiTooltip
								content='Подробнее'
								className='cursor-pointer rounded-md transition-colors hover:bg-secondary'
								side='top'
							>
								<TeacherTaskPopover item={item} isDashboard={false}>
									<div className='rounded-md p-1 hover:bg-secondary'>
										<CircleEllipsis size={20} />
									</div>
								</TeacherTaskPopover>
							</UiTooltip>
						</div>
					</div>
					<Text
						className='mt-2 select-none font-semibold'
						size='extraSmall'
						color='indigo'
					>
						{getPrivacy(item.privacy)}
					</Text>
				</div>
			</div>
		)
	}
	return isGrid ? gridElement() : listElement()
}
