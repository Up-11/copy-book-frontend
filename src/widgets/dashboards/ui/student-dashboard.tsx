import { DashboardBlockPrimitive } from './dashboard-block-primitive'
import { routes } from '@/shared/config/routes'
import { Skeleton } from '@/shared/ui/other/skeleton'
import { DashboardFooter } from '@/widgets/footers'
import React from 'react'

export const StudentDashboard: React.FC = () => {
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
				link={routes.dashboard.student}
			>
				<div className='grid grid-cols-4 h-[450px] gap-x-5'>
					<Skeleton className='h-full rounded-lg' />
					<Skeleton className='h-full rounded-lg' />
					<Skeleton className='h-full rounded-lg' />
					<Skeleton className='h-full rounded-lg' />
				</div>
			</DashboardBlockPrimitive>
			<div className='grid grid-cols-2 gap-x-5'>
				<DashboardBlockPrimitive title='Песочница'>
					<Skeleton className='h-[330px] w-full rounded-lg' />
				</DashboardBlockPrimitive>
				<DashboardBlockPrimitive
					title='Черновики'
					linkText='Все черновики'
					link={routes.code.drafts}
				>
					<div className='flex flex-col gap-3 '>
						<Skeleton className='h-[100px] w-full rounded-lg' />
						<Skeleton className='h-[100px] w-full rounded-lg' />
						<Skeleton className='h-[100px] w-full rounded-lg' />
					</div>
				</DashboardBlockPrimitive>
			</div>
			<DashboardBlockPrimitive
				title='Курсы'
				link={routes.dashboard.student}
				linkText='Все курсы'
			>
				<div className='grid grid-cols-2 gap-3'>
					<Skeleton className='h-[100px] w-full rounded-lg' />
					<Skeleton className='h-[100px] w-full rounded-lg' />
					<Skeleton className='h-[100px] w-full rounded-lg' />
					<Skeleton className='h-[100px] w-full rounded-lg' />
					<Skeleton className='h-[100px] w-full rounded-lg' />
					<Skeleton className='h-[100px] w-full rounded-lg' />
				</div>
			</DashboardBlockPrimitive>
			<div className='grid grid-cols-2 gap-x-5'>
				<DashboardBlockPrimitive title='Преподаватели'>
					<Skeleton className='h-[330px] w-full rounded-lg' />
				</DashboardBlockPrimitive>
				<DashboardBlockPrimitive title='Группы'>
					<Skeleton className='h-[330px] w-full rounded-lg' />
				</DashboardBlockPrimitive>
			</div>
			<DashboardFooter />
		</div>
	)
}
