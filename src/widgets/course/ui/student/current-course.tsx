'use client'

import { CurrentEntity } from '@/common/current-entity'
import { ICurrentEntityProps } from '@/common/current-entity/types'
import { useQueryManager } from '@/common/query'
import { Slider, SliderChapterItem } from '@/common/slider'
import { CourseProgressBar } from '@/common/task-and-course/ui/progress-bar'
import { routes } from '@/shared/config/routes'
import { HiddenText } from '@/shared/lib/components/hidden-text'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { cn } from '@/shared/lib/css'
import { getStatus } from '@/shared/lib/map'
import { generateCourseLink } from '@/shared/lib/utils'
import {
	Course,
	CourseChapter,
	CoursePrivacy,
	CourseStatus
} from '@/shared/types/course.types'
import { UserRole } from '@/shared/types/user.types'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Button } from '@/shared/ui/other/button'
import Title from '@/shared/ui/view/title'
import { ShareSidebar } from '@/widgets/share/share-sidebar'
import { Share } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CurrentCourse: React.FC<{ course: Course }> = ({ course }) => {
	useQueryManager()

	const url = generateCourseLink(course.courseId, UserRole.STUDENT)

	const currentCourse: ICurrentEntityProps = {
		title: course.title,
		description: course.description,
		renderHeaderElement() {
			return (
				<UiTooltip
					content='Поделиться'
					className='cursor-pointer rounded-md transition-colors hover:bg-secondary'
				>
					<ShareSidebar
						title={course.title}
						trigger={
							<Button size={'icon'} variant={'ghost'}>
								<Share />
							</Button>
						}
						qrUrl={url}
					/>
				</UiTooltip>
			)
		},
		renderProgressBar() {
			return (
				<div className='col-span-3 mb-4'>
					<CourseProgressBar className='w-full' item={course.progress} />
				</div>
			)
		},
		renderFooter() {
			return (
				<>
					{' '}
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
				</>
			)
		},
		items: [
			{
				name: 'Преподаватель',
				content: course.metadata.teacher
			},
			{
				name: 'Статус',
				content: getStatus<CourseStatus>(course.status!),
				condition: !!course.status
			},
			{
				name: 'Студентов проходит',
				content: course.statistics.studentsNow
			},
			{
				name: 'Рейтинг',
				content: course.statistics.averageRating
			},
			{
				name: 'Количество заданий',
				content: course.progress.itemsQuantity
			},
			{
				name: 'Количество секций',
				content: course.progress.chaptersQuantity,
				condition: course.progress.chaptersQuantity > 0
			}
		],
		renderUnusualItems() {
			return (
				<>
					<WithCondition
						condition={
							!!course.code || course.privacy === CoursePrivacy.Private
						}
						className='col-span-1 gap-1 rounded-lg bg-indigo-100 p-layout'
						render={
							<div>
								Код курса:
								<HiddenText className='h-7 text-xl' text={course.code!} />
							</div>
						}
					/>
				</>
			)
		}
	}
	return <CurrentEntity {...currentCourse} />
}
