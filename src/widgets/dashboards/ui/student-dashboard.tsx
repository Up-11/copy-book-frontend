import { DashboardBlockPrimitive } from './dashboard-block-primitive'
import { DRAFT_MOCK } from '@/entities/draft/mock.data'
import { routes } from '@/shared/config/routes'
import { WithCondition } from '@/shared/lib/components/with-condition'
import { cn } from '@/shared/lib/css'
import { courses, dashboardTasks } from '@/shared/mock/mock'
import { Button } from '@/shared/ui/other/button'
import { Skeleton } from '@/shared/ui/other/skeleton'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { DashboardFooter } from '@/widgets/footers'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { lazy } from 'react'

const DashboardCalendar = lazy(() =>
	import('@/features/calendar').then(module => ({
		default: module.DashboardCalendar
	}))
)
const DashboardTask = lazy(() =>
	import('@/entities/task').then(module => ({
		default: module.DashboardTask
	}))
)

const DraftItem = lazy(() =>
	import('@/entities/draft').then(module => ({
		default: module.DraftItem
	}))
)
const AllCoursesItem = lazy(() =>
	import('@/entities/course').then(module => ({
		default: module.AllCoursesItem
	}))
)

export const StudentDashboard: React.FC = () => {
	const dashboardcourses = courses.slice(0, 6)
	return (
		<div className='mt-10 flex flex-col gap-4'>
			<DashboardBlockPrimitive
				title='Календарь заданий'
				linkText='Открыть'
				description='Не пропустите важные задания'
				link={routes.calendar}
			>
				<div className='h-[120px] w-full'>
					<Suspense fallback={<Skeleton className='h-full w-full' />}>
						<DashboardCalendar tasks={dashboardTasks} />
					</Suspense>
				</div>
			</DashboardBlockPrimitive>
			<DashboardBlockPrimitive
				title='Ваши задания'
				linkText='Все задания'
				link={routes.tasks.student}
			>
				<WithCondition
					condition={!!dashboardTasks.length}
					render={
						<Suspense fallback={<Skeleton className='h-[450px] w-full' />}>
							<div className='grid h-[450px] grid-cols-4 gap-x-5'>
								{dashboardTasks.slice(0, 4).map(task => (
									<DashboardTask key={task.id} className='h-full' item={task} />
								))}
							</div>
						</Suspense>
					}
					fallback={
						<div className='flex w-full justify-between rounded-lg bg-indigo-50 p-layout'>
							<Title>
								Добавьте хотя бы одну задачу, чтобы увидеть ее здесь
							</Title>
							<Link href={routes.tasks.main}>
								<Button>Список всех заданий</Button>
							</Link>
						</div>
					}
				/>
			</DashboardBlockPrimitive>
			<div className='grid grid-cols-2 gap-x-5'>
				<DashboardBlockPrimitive title='Песочница'>
					<div className='flex h-[330px] w-full flex-col gap-2 rounded-lg bg-indigo-50 p-layout'>
						<Title size='large'>Песочница</Title>
						<Text color='gray'>Улучшите ваши навыки в написании кода</Text>
						<div className='mt-auto flex justify-between'>
							<Link href={routes.code.sandbox} className='self-end'>
								<Button>Перейти</Button>
							</Link>
							<div className='w-48'>
								<Image
									src='/assets/code.png'
									alt='code'
									width={400}
									height={400}
								/>
							</div>
						</div>
					</div>
				</DashboardBlockPrimitive>
				<WithCondition
					condition={DRAFT_MOCK.length > 0}
					render={
						<DashboardBlockPrimitive
							title='Черновики'
							linkText='Все черновики'
							link={routes.code.drafts}
						>
							<Suspense fallback={<Skeleton className='h-[450px] w-full' />}>
								<div className='flex flex-col gap-3'>
									{DRAFT_MOCK.slice(0, 3).map(draft => (
										<DraftItem
											className='h-[100px]'
											key={draft.id}
											{...draft}
											isGrid={false}
											isDashboard
										/>
									))}
								</div>
							</Suspense>
						</DashboardBlockPrimitive>
					}
				/>
			</div>
			<DashboardBlockPrimitive
				title='Курсы'
				link={routes.course.student}
				linkText='Все курсы'
			>
				<WithCondition
					condition={dashboardTasks.length > 0}
					render={
						<Suspense fallback={<Skeleton className='h-[450px] w-full' />}>
							<div className='grid grid-cols-2 gap-3 gap-x-5'>
								{dashboardcourses.map(course => (
									<AllCoursesItem
										className={cn(
											!(dashboardcourses.length % 2 === 0)
												? 'last:col-span-2'
												: 'last:col-span-1'
										)}
										isDashboard
										key={course.courseId}
										item={course}
										isGrid={false}
									/>
								))}
							</div>
						</Suspense>
					}
					fallback={
						<div className='flex w-full justify-between rounded-lg bg-indigo-50 p-layout'>
							<Title>Добавьте хотя бы один курс, чтобы увидеть его здесь</Title>
							<Link href={routes.course.main}>
								<Button>Список всех курсов</Button>
							</Link>
						</div>
					}
				/>
			</DashboardBlockPrimitive>

			<DashboardFooter />
		</div>
	)
}
