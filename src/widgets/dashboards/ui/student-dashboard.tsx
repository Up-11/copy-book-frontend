import { DashboardBlockPrimitive } from './dashboard-block-primitive'
import { DraftItem } from '@/entities/draft'
import { DRAFT_MOCK } from '@/entities/draft/mock.data'
import { DashboardTask } from '@/entities/task'
import { routes } from '@/shared/config/routes'
import { dashboardTasks } from '@/shared/mock/mock'
import { Button } from '@/shared/ui/other/button'
import { Skeleton } from '@/shared/ui/other/skeleton'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { DashboardFooter } from '@/widgets/footers'
import Image from 'next/image'
import Link from 'next/link'
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
				link={routes.tasks.student}
			>
				<div className='grid grid-cols-4 h-[450px] gap-x-5'>
					{dashboardTasks.slice(0, 4).map(task => (
						<DashboardTask key={task.id} className='h-full' item={task} />
					))}
				</div>
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
			</div>
			<DashboardBlockPrimitive
				title='Курсы'
				link={routes.dashboard.student}
				linkText='Все курсы'
			>
				<div className='grid grid-cols-2 gap-x-5 gap-3'>
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
