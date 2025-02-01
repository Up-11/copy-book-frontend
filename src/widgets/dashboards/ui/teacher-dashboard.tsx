import { DashboardBlockPrimitive } from './dashboard-block-primitive'
import { routes } from '@/shared/config/routes'
import { dashboardTasks } from '@/shared/mock/mock'
import { Button } from '@/shared/ui/other/button'
import { Skeleton } from '@/shared/ui/other/skeleton'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { DashboardFooter } from '@/widgets/footers'
import Image from 'next/image'
import Link from 'next/link'
import React, { lazy, Suspense } from 'react'

const DashboardCalendar = lazy(() =>
	import('@/features/calendar').then(module => ({
		default: module.DashboardCalendar
	}))
)

export const TeacherDashboard: React.FC = () => {
	return (
		<div className='mt-10 flex flex-col gap-4'>
			<DashboardBlockPrimitive
				title='Календарь заданий'
				linkText='Открыть'
				link={routes.calendar}
			>
				<div className='h-[120px] w-full'>
					<Suspense fallback={<Skeleton className='h-full w-full' />}>
						<DashboardCalendar tasks={dashboardTasks} />
					</Suspense>
				</div>
			</DashboardBlockPrimitive>
			<DashboardBlockPrimitive title='Журнал'>
				<div className='flex h-[300px] w-full justify-between rounded-lg bg-indigo-50'>
					<div className='flex h-full flex-col justify-between p-layout'>
						<div>
							<Title size='large'>Журнал</Title>
							<Text>
								Следите за успехами ваших студентов в интерактивном журнале
							</Text>
						</div>
						<Link href={routes.journal}>
							<Button size={'lg'}>Открыть</Button>
						</Link>
					</div>
					<Image
						alt='journal'
						src={'/assets/journal.png'}
						width={300}
						height={300}
					/>
				</div>
			</DashboardBlockPrimitive>
			<DashboardBlockPrimitive
				title='Ваши курсы'
				link={routes.course.teacher.courses}
				linkText='Открыть все'
			>
				<div className='grid grid-cols-2 gap-5'>
					<Skeleton className='h-[400px] w-full' />
					<Skeleton className='h-[400px] w-full' />
					<Skeleton className='col-span-2 h-[100px] w-full' />
				</div>
			</DashboardBlockPrimitive>
			<DashboardBlockPrimitive
				title='Ваши задания'
				link={routes.tasks.teacher.tasks}
				linkText='Открыть все'
			>
				<div className='grid grid-cols-4 gap-5'>
					<Skeleton className='h-[400px] w-full' />
					<Skeleton className='h-[400px] w-full' />
					<Skeleton className='h-[400px] w-full' />
					<Skeleton className='h-[400px] w-full' />
					<Skeleton className='col-span-4 h-[100px] w-full' />
				</div>
			</DashboardBlockPrimitive>
			<DashboardFooter />
		</div>
	)
}
