'use client'

import { useQueryManager } from '@/common/query'
import { Slider } from '@/common/slider/slider'
import { CourseProgressBar } from '@/common/task-and-course/ui/progress-bar'
import { HiddenText } from '@/shared/lib/components/hidden-text'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { cn } from '@/shared/lib/css'
import { getStatus } from '@/shared/lib/map'
import {
	Course,
	CoursePrivacy,
	CourseStatus
} from '@/shared/types/course.types'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { Share } from 'lucide-react'
import React from 'react'

export const CurrentCourse: React.FC<{ course: Course }> = ({ course }) => {
	useQueryManager()
	return (
		<div className='p-layout flex justify-between flex-col h-full'>
			<section className='flex flex-col'>
				<div className='flex justify-between items-center'>
					<Title size='large'>{course.title}</Title>
					<UiTooltip
						content='Поделиться'
						className='hover:bg-secondary rounded-md transition-colors cursor-pointer'
					>
						<div className='p-1 hover:bg-secondary rounded-md'>
							<Share size={20} />
						</div>
					</UiTooltip>
				</div>

				<div className='my-4'>
					<Text size='small' color='gray' className='mt-2'>
						{course.description}
					</Text>
				</div>
				<div className='col-span-3 mb-4'>
					<CourseProgressBar className='w-full' item={course.progress} />
				</div>
			</section>
			<section className='grid grid-rows-[1fr_auto] grid-cols-[300px_1fr_1fr] mt-4 gap-3'>
				<WithCondition
					condition={!!course.metadata.teacher}
					className='bg-indigo-100 p-layout rounded-lg'
					render={
						<div>
							Преподаватель:
							<Title>{course.metadata.teacher}</Title>
						</div>
					}
				/>
				<WithCondition
					className='bg-indigo-100 p-layout rounded-lg'
					condition={!!course.status}
					render={
						<div>
							Статус:
							<Title>{getStatus<CourseStatus>(course.status!)}</Title>
						</div>
					}
				/>
				<WithCondition
					condition={!!course.statistics.studentsNow}
					className='bg-indigo-100  gap-1 p-layout rounded-lg  col-span-1'
					render={
						<div>
							Студентов проходит:
							<Title>{course.statistics.studentsNow}</Title>
						</div>
					}
				/>
				<WithCondition
					condition={!!course.statistics.averageRating}
					className='bg-indigo-100  gap-1 p-layout rounded-lg  col-span-1 '
					render={
						<div>
							Рейтинг:
							<Title>{course.statistics.averageRating}</Title>
						</div>
					}
				/>
				<WithCondition
					condition={!!course.code || course.privacy === CoursePrivacy.Private}
					className='bg-indigo-100  gap-1 p-layout rounded-lg  col-span-1 '
					render={
						<div>
							Код курса:
							<HiddenText text={course.code!} />
						</div>
					}
				/>
				<WithCondition
					condition={!!course.code}
					className='bg-indigo-100  gap-1 p-layout rounded-lg  col-span-1 '
					render={
						<div>
							Количество заданий:
							<Title>{course.items.length}</Title>
						</div>
					}
				/>
			</section>
			<section className='mt-auto flex flex-col gap-1  '>
				<Title>Задания</Title>
				<Slider items={course.items} />
			</section>
			<section
				className={cn(
					' flex mt-auto gap-3  ',
					!course.metadata.isByCode ? ' justify-between' : 'justify-end'
				)}
			>
				{!course.metadata.isByCode && (
					<Button variant={'outline'}>Удалить</Button>
				)}
				<Button>{course.items.length != 0 ? 'Продолжить' : 'Выполнить'}</Button>
			</section>
		</div>
	)
}
