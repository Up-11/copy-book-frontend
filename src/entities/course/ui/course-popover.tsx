import { WithCondition } from '@/shared/lib/components/with-condition'
import { cn } from '@/shared/lib/css'
import { getStatus } from '@/shared/lib/map'
import { Course, CourseStatus } from '@/shared/types/course.types'
import { PropsWithClassName } from '@/shared/types/props.types'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { Star } from 'lucide-react'
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
				className='p-layout w-[380px] flex flex-col gap-2'
			>
				<div className='flex justify-between items-center'>
					<Title size='small'>{item.title}</Title>
					<div className='flex gap-1 items-center select-none cursor-default text-indigo-500'>
						<Star size={16} fill='#6366f1' />
						<Text size='small' className='font-semibold'>
							{item.statistics.averageRating}
						</Text>
					</div>
				</div>
				<Text size='small' color='gray'>
					{item.description}
				</Text>

				<div className='grid grid-cols-2 gap-3'>
					<div className='bg-indigo-200 col-span-2 flex gap-1 items-center   p-2 rounded-lg'>
						<Text size='small'>Создатель: </Text>
						<Text size='small' className='font-bold'>
							{item.metadata.teacher}
						</Text>
					</div>
					<div className='bg-indigo-200 col-span-1 flex gap-1 items-center   p-2 rounded-lg'>
						<Text size='extraSmall'>Заданий: </Text>
						<Text size='extraSmall' className='font-bold'>
							{item.progress.itemsQuantity}
						</Text>
					</div>
					<WithCondition
						condition={!!item.progress.itemsQuantity}
						className='bg-indigo-200 col-span-1 flex gap-1 items-center   p-2 rounded-lg'
						render={
							<>
								<Text size='extraSmall'>Текущее задание: </Text>
								<Text size='extraSmall' className='font-bold line-clamp-2'>
									{item.progress.currentItem.title}
								</Text>
							</>
						}
					/>
					<WithCondition
						className='bg-indigo-200  p-2 rounded-lg'
						condition={!!item.status}
						render={
							<div className='flex gap-2 items-center'>
								<Text size='extraSmall' className=''>
									Статус:
								</Text>
								<Text
									size='extraSmall'
									className='font-bold line-clamp-2 break-words '
								>
									{getStatus<CourseStatus>(item.status!)}
								</Text>
							</div>
						}
					/>
					<WithCondition
						className='bg-indigo-200  p-2 rounded-lg'
						condition={!!item.statistics.studentsNow}
						render={
							<div className='flex gap-2 justify-start items-center'>
								<Text size='extraSmall' className=''>
									Студентов сейчас:
								</Text>
								<Text
									size='extraSmall'
									className='font-bold line-clamp-2 break-words '
								>
									{item.statistics.studentsNow}
								</Text>
							</div>
						}
					/>
				</div>
				<div
					className={cn(
						'mt-auto flex ',
						!item.code ? 'justify-between' : 'justify-end'
					)}
				>
					<WithCondition
						className='self-end'
						condition={!item.code}
						render={<Button variant={'outline'}>Отписаться</Button>}
					/>

					<div className='flex gap-3 mt-8'>
						<Button>
							{item.progress.itemsCompleted > 1 ? 'Продолжить' : 'Выполнить'}
						</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
