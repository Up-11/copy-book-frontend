import { DashboardBlockPrimitive } from './dashboard-block-primitive'
import { AllCoursesItem } from '@/entities/course'
import { DraftItem } from '@/entities/draft'
import { DRAFT_MOCK } from '@/entities/draft/mock.data'
import { DashboardTask } from '@/entities/task'
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
import React from 'react'

export const StudentDashboard: React.FC = () => {
	const dashboardcourses = courses.slice(0, 6)
	return (
		<div className='flex flex-col gap-4 mt-10'>
			<DashboardBlockPrimitive
				title='Календарь заданий'
				linkText='Открыть'
				description='Не пропустите важные задания'
				link={routes.dashboard.student}
			>
				<Skeleton className='w-full h-[100px] rounded-lg' />
			</DashboardBlockPrimitive>
			<DashboardBlockPrimitive
				title='Ваши задания'
				linkText='Все задания'
				link={routes.tasks.student}
			>
				<WithCondition
					condition={!!dashboardTasks.length}
					render={
						<div className='grid grid-cols-4 h-[450px] gap-x-5'>
							{dashboardTasks.slice(0, 4).map(task => (
								<DashboardTask key={task.id} className='h-full' item={task} />
							))}
						</div>
					}
					fallback={
						<div className='w-full  bg-indigo-50 rounded-lg p-layout flex justify-between'>
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
					<div className='h-[330px] w-full rounded-lg flex flex-col gap-2 bg-indigo-50 p-layout'>
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
							<div className='flex flex-col gap-3 '>
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
						<div className='grid grid-cols-2 gap-x-5 gap-3 '>
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
					}
					fallback={
						<div className='w-full  bg-indigo-50 rounded-lg p-layout flex justify-between'>
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
