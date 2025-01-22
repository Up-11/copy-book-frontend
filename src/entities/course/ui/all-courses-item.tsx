import { CoursePopover } from './course-popover'
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
					'flex w-full bg-indigo-50 rounded-lg justify-between p-layout',
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
								className='hover:bg-secondary rounded-md transition-colors cursor-pointer'
							>
								<Link
									href={routes.course.currentUserCourse(item.courseId)}
									className='p-1 hover:bg-secondary rounded-md'
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
					<div className='flex gap-1 items-center select-none cursor-default text-indigo-500'>
						<Star size={16} fill='#6366f1' />
						<Text size='small' className='font-semibold'>
							{item.statistics.averageRating}
						</Text>
					</div>
					<div className='flex gap-3 '>
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
							<div className='p-1 self-start hover:bg-secondary rounded-md transition-colors cursor-pointer'>
								<Bookmark
									size={20}
									className={cn(
										item.status !== CourseStatus.NotStarted &&
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
								<CoursePopover item={item} isDashboard={false}>
									<div className='p-1 self-start hover:bg-secondary rounded-md transition-colors cursor-pointer'>
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
			<div className='flex flex-col bg-indigo-50 rounded-lg p-layout gap-4'>
				<div className='flex flex-col gap-2 w-full'>
					<div className='flex justify-between  gap-2'>
						<Title size='small' className='line-clamp-2'>
							{item.title}
						</Title>
						<div className='flex gap-1 items-center select-none cursor-default text-indigo-500'>
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
				<div className='flex flex-col gap-3 mt-auto'>
					{item.metadata.teacher && (
						<div className='bg-indigo-200 flex gap-1 items-center  p-2 rounded-lg'>
							<Text size='small'>Создатель: </Text>
							<Text size='small' className='font-bold'>
								{item.metadata.teacher}
							</Text>
						</div>
					)}

					<div className='flex flex-col gap-2 mt-auto '>
						<Button size='sm' className='w-full flex  self'>
							Открыть <ArrowRightIcon />
						</Button>
						<div className='flex gap-3 justify-center'>
							<UiTooltip
								content='Добавить в мои курсы'
								className='hover:bg-secondary rounded-md transition-colors cursor-pointer'
							>
								<div className='p-1 hover:bg-secondary rounded-md'>
									<Bookmark
										size={20}
										className={cn(
											item.status !== CourseStatus.NotStarted &&
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
								<CoursePopover item={item} isDashboard={false}>
									<div className='p-1 self-start hover:bg-secondary rounded-md transition-colors cursor-pointer'>
										<CircleEllipsis size={20} />
									</div>
								</CoursePopover>
							</UiTooltip>
							{item.status !== CourseStatus.NotStarted && (
								<UiTooltip
									content='Открыть'
									className='hover:bg-secondary rounded-md transition-colors cursor-pointer'
								>
									<Link
										href={routes.course.currentUserCourse(item.courseId)}
										className='p-1 hover:bg-secondary rounded-md'
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
