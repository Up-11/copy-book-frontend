import { CourseProgressBar } from '@/common/task-and-course/ui/progress-bar'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { cn } from '@/shared/lib/css'
import { getStatus } from '@/shared/lib/map'
import { Course, CourseStatus } from '@/shared/types/course.types'
import { PropsWithClassName } from '@/shared/types/props.types'
import { Rating } from '@/shared/ui/custom/rating'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import React, { PropsWithChildren } from 'react'

export const CoursePopover: React.FC<
	PropsWithChildren &
		PropsWithClassName & { item: Course; isDashboard?: boolean }
> = ({ item, className, children }) => {
	return (
		<Popover>
			<PopoverTrigger className={className} asChild>
				{children}
			</PopoverTrigger>
			<PopoverContent
				align='start'
				side='right'
				className='flex w-[380px] flex-col gap-2 p-layout'
			>
				<div className='flex items-center justify-between'>
					<Title size='small' className='line-clamp-2'>
						{item.title}
					</Title>
					<Rating rating={item.statistics.averageRating} />
				</div>
				<Text size='small' color='gray' className='line-clamp-4'>
					{item.description}
				</Text>
				<CourseProgressBar item={item.progress} />
				<div className='grid grid-cols-2 gap-3'>
					{item.metadata.teacher && (
						<div className='col-span-2 flex items-center gap-1 rounded-lg bg-indigo-200 p-2'>
							<Text size='small'>Создатель: </Text>
							<Text size='small' className='font-bold'>
								{item.metadata.teacher}
							</Text>
						</div>
					)}

					<WithCondition
						condition={!!item.progress.itemsQuantity}
						className='col-span-2 flex items-center gap-1 rounded-lg bg-indigo-200 p-2'
						render={
							<>
								<Text size='small'>Текущее задание: </Text>
								<Text size='small' className='line-clamp-2 font-bold'>
									{item.progress.currentItem?.title}
								</Text>
							</>
						}
					/>
					<div className='col-span-1 flex items-center gap-1 rounded-lg bg-indigo-200 p-2'>
						<Text size='extraSmall'>Заданий: </Text>
						<Text size='extraSmall' className='font-bold'>
							{item.progress.itemsQuantity}
						</Text>
					</div>
					<WithCondition
						condition={!!item.progress.itemsQuantity}
						className='col-span-1 flex items-center gap-1 rounded-lg bg-indigo-200 p-2'
						render={
							<>
								<Text size='extraSmall'>Секций: </Text>
								<Text size='extraSmall' className='line-clamp-2 font-bold'>
									{item.progress.chaptersQuantity}
								</Text>
							</>
						}
					/>
					<WithCondition
						className='rounded-lg bg-indigo-200 p-2'
						condition={!!item.status}
						render={
							<div className='flex items-center gap-2'>
								<Text size='extraSmall' className=''>
									Статус:
								</Text>
								<Text
									size='extraSmall'
									className='line-clamp-2 break-words font-bold'
								>
									{getStatus<CourseStatus>(item.status!)}
								</Text>
							</div>
						}
					/>
					<WithCondition
						className='rounded-lg bg-indigo-200 p-2'
						condition={!!item.statistics.studentsNow}
						render={
							<div className='flex items-center justify-start gap-2'>
								<Text size='extraSmall' className=''>
									Студентов сейчас:
								</Text>
								<Text
									size='extraSmall'
									className='line-clamp-2 break-words font-bold'
								>
									{item.statistics.studentsNow}
								</Text>
							</div>
						}
					/>
				</div>
				<div
					className={cn(
						'mt-auto flex',
						!item.code ? 'justify-between' : 'justify-end'
					)}
				>
					<WithCondition
						className='self-end'
						condition={!item.code}
						render={<Button variant={'outline'}>Отписаться</Button>}
					/>

					<div className='mt-8 flex gap-3'>
						<Button>
							{item.progress.itemsCompleted > 1 ? 'Продолжить' : 'Выполнить'}
						</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
