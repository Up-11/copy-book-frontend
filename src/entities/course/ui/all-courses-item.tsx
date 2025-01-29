import { CoursePopover } from './course-popover'
import { CourseProgressBar } from '@/common/task-and-course/ui/progress-bar'
import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { Course, CourseStatus } from '@/shared/types/course.types'
import { PropsWithClassName } from '@/shared/types/props.types'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import {
	ArrowRightIcon,
	ArrowUpRight,
	Bookmark,
	CircleEllipsis,
	Star
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const AllCoursesItem: React.FC<
	{
		item: Course
		isGrid: boolean
		isDashboard: boolean
	} & PropsWithClassName
> = ({ item, isGrid, isDashboard, className }) => {
	const listElement = () => {
		return (
			<div
				className={cn(
					'flex w-full justify-between rounded-lg bg-indigo-50 p-layout',
					className
				)}
			>
				<div className='flex flex-col gap-1'>
					<div className='flex gap-2'>
						<Title
							className={cn(isDashboard ? 'line-clamp-1' : 'line-clamp-2')}
						>
							{item.title}
						</Title>
						{item.status !== CourseStatus.NotStarted && (
							<UiTooltip
								content='Открыть'
								className='cursor-pointer rounded-md transition-colors hover:bg-secondary'
							>
								<Link
									href={routes.course.currentUserCourse(item.courseId)}
									className='rounded-md p-1 hover:bg-secondary'
								>
									<ArrowUpRight size={20} />
								</Link>
							</UiTooltip>
						)}
					</div>
					<Text
						size='small'
						color='gray'
						className={cn(isDashboard ? 'line-clamp-1' : 'line-clamp-2')}
					>
						{item.description}
					</Text>
				</div>
				<div className='flex items-center gap-10'>
					{!isDashboard && <CourseProgressBar item={item.progress} />}
					<div className='flex cursor-default select-none items-center gap-1 text-indigo-500'>
						<Star size={16} fill='#6366f1' />
						<Text size='small' className='font-semibold'>
							{item.statistics.averageRating}
						</Text>
					</div>
					<div className='flex gap-3'>
						<Button size={'sm'}>
							Приступить <ArrowRightIcon />
						</Button>
					</div>
					<div className='flex flex-col gap-1'>
						<UiTooltip
							content='Добавить в мои курсы'
							className='self-start'
							side='left'
						>
							<div className='cursor-pointer self-start rounded-md p-1 transition-colors hover:bg-secondary'>
								<Bookmark
									size={20}
									className={cn(
										item.status !== CourseStatus.NotStarted &&
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
								<CoursePopover item={item} isDashboard={false}>
									<div className='cursor-pointer self-start rounded-md p-1 transition-colors hover:bg-secondary'>
										<CircleEllipsis size={20} />
									</div>
								</CoursePopover>
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
					<div className='flex justify-between gap-2'>
						<Title size='small' className='line-clamp-2'>
							{item.title}
						</Title>
						<div className='flex cursor-default select-none items-center gap-1 text-indigo-500'>
							<Star size={16} fill='#6366f1' />
							<Text size='small' className='font-semibold'>
								{item.statistics.averageRating}
							</Text>
						</div>
					</div>
					<Text size='small' color='gray' className='line-clamp-4'>
						{item.description}
					</Text>
				</div>
				<div className='mt-auto flex flex-col gap-3'>
					<CourseProgressBar item={item.progress} />
					{item.metadata.teacher && (
						<div className='flex items-center gap-1 rounded-lg bg-indigo-200 p-2'>
							<Text size='small'>Создатель: </Text>
							<Text size='small' className='font-bold'>
								{item.metadata.teacher}
							</Text>
						</div>
					)}

					<div className='mt-auto flex flex-col gap-2'>
						<Button size='sm' className='self flex w-full'>
							Открыть <ArrowRightIcon />
						</Button>
						<div className='flex justify-center gap-3'>
							<UiTooltip
								content='Добавить в мои курсы'
								className='cursor-pointer rounded-md transition-colors hover:bg-secondary'
							>
								<div className='rounded-md p-1 hover:bg-secondary'>
									<Bookmark
										size={20}
										className={cn(
											item.status !== CourseStatus.NotStarted &&
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
								<CoursePopover item={item} isDashboard={false}>
									<div className='cursor-pointer self-start rounded-md p-1 transition-colors hover:bg-secondary'>
										<CircleEllipsis size={20} />
									</div>
								</CoursePopover>
							</UiTooltip>
							{item.status !== CourseStatus.NotStarted && (
								<UiTooltip
									content='Открыть'
									className='cursor-pointer rounded-md transition-colors hover:bg-secondary'
								>
									<Link
										href={routes.course.currentUserCourse(item.courseId)}
										className='rounded-md p-1 hover:bg-secondary'
									>
										<ArrowUpRight size={20} />
									</Link>
								</UiTooltip>
							)}
						</div>
					</div>
				</div>
			</div>
		)
	}
	return isGrid ? gridElement() : listElement()
}
