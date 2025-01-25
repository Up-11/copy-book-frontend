'use client'

import { useQueryManager } from '@/common/query'
import { Slider, SliderChapterItem } from '@/common/slider'
import { CourseProgressBar } from '@/common/task-and-course/ui/progress-bar'
import { routes } from '@/shared/config/routes'
import { HiddenText } from '@/shared/lib/components/hidden-text'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { cn } from '@/shared/lib/css'
import { getStatus } from '@/shared/lib/map'
import {
	Course,
	CourseChapter,
	CoursePrivacy,
	CourseStatus
} from '@/shared/types/course.types'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { Share } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CurrentCourse: React.FC<{ course: Course }> = ({ course }) => {
	useQueryManager()
	return (
		<div className='flex h-full flex-col justify-between p-layout'>
			<section className='flex flex-col'>
				<div className='flex items-center justify-between'>
					<Title size='large'>{course.title}</Title>
					<UiTooltip
						content='Поделиться'
						className='cursor-pointer rounded-md transition-colors hover:bg-secondary'
					>
						<div className='rounded-md p-1 hover:bg-secondary'>
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
			<section className='mt-4 grid grid-cols-[300px_1fr_1fr] grid-rows-[1fr_auto] gap-3'>
				<WithCondition
					condition={!!course.metadata.teacher}
					className='rounded-lg bg-indigo-100 p-layout'
					render={
						<div>
							Преподаватель:
							<Title>{course.metadata.teacher}</Title>
						</div>
					}
				/>
				<WithCondition
					className='rounded-lg bg-indigo-100 p-layout'
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
					className='col-span-1 gap-1 rounded-lg bg-indigo-100 p-layout'
					render={
						<div>
							Студентов проходит:
							<Title>{course.statistics.studentsNow}</Title>
						</div>
					}
				/>
				<WithCondition
					condition={!!course.statistics.averageRating}
					className='col-span-1 gap-1 rounded-lg bg-indigo-100 p-layout'
					render={
						<div>
							Рейтинг:
							<Title>{course.statistics.averageRating}</Title>
						</div>
					}
				/>
				<WithCondition
					condition={!!course.code || course.privacy === CoursePrivacy.Private}
					className='col-span-1 gap-1 rounded-lg bg-indigo-100 p-layout'
					render={
						<div>
							Код курса:
							<HiddenText text={course.code!} />
						</div>
					}
				/>
				<WithCondition
					condition={course.progress.itemsQuantity > 0}
					className='col-span-1 gap-1 rounded-lg bg-indigo-100 p-layout'
					render={
						<div>
							Количество заданий:
							<Title>{course.progress.itemsQuantity}</Title>
						</div>
					}
				/>
				<WithCondition
					condition={course.progress.chaptersQuantity > 0}
					className='col-span-1 gap-1 rounded-lg bg-indigo-100 p-layout'
					render={
						<div>
							Количество секций:
							<Title>{course.progress.chaptersQuantity}</Title>
						</div>
					}
				/>
			</section>
			<section className='mt-auto flex flex-col gap-1'>
				<Title>Секции</Title>
				<Slider<CourseChapter>
					items={course.chapters}
					renderItems={course => <SliderChapterItem item={course} />}
				/>
			</section>
			<section
				className={cn(
					'mt-auto flex gap-3',
					!course.metadata.isByCode ? 'justify-between' : 'justify-end'
				)}
			>
				{!course.metadata.isByCode && (
					<Button variant={'outline'}>Удалить</Button>
				)}
				<Link
					href={routes.course.complitionCourse(
						course.courseId,
						course.chapters[0].id
					)}
				>
					<Button>
						{course.chapters.length != 0 ? 'Продолжить' : 'Выполнить'}
					</Button>
				</Link>
			</section>
		</div>
	)
}
