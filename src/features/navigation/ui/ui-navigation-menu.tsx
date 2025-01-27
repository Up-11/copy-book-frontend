'use client'

import { MenuItemType } from '../nav-menu.types'
import { TaskDifficultyDot } from '@/entities/task'
import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { courses, dashboardTasks } from '@/shared/mock/mock'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger
} from '@/shared/ui/modals/navigation-menu'
import Title from '@/shared/ui/view/title'
import {
	BookAudio,
	BookKey,
	Code2,
	CodeSquare,
	LayoutList,
	TerminalSquareIcon
} from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

//TODO Сделать меню и под учителя и под ученика

export const UiNavigationMenu: React.FC = () => {
	return (
		<NavigationMenu className='z-[999]'>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Задания</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]'>
							<TallMenuItem
								href={routes.tasks.student}
								title={'Ваши задания'}
								description={'Посмотрите список ваших заданий'}
								icon={<LayoutList />}
							/>
							<TallMenuItem
								href={routes.tasks.main}
								title={'Все задания'}
								description={'Подберите задания которые подходят именно вам'}
								icon={<TerminalSquareIcon />}
							/>
						</ul>
						<Title className='px-4'>Важные задания</Title>
						<ul className='p-4'>
							{dashboardTasks.slice(0, 3).map(task => (
								<MenuItem
									key={task.id}
									title={task.title}
									description={task.description || ''}
									diff={task.difficulty}
									href={routes.tasks.currentUserTask(task.id)}
								/>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>Песочница</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]'>
							<TallMenuItem
								href={routes.code.sandbox}
								title={'Песочница'}
								description={
									'Потренеруйтесь в самостоятельном написании кода в песочнице'
								}
								icon={<Code2 />}
							/>
							<TallMenuItem
								href={routes.code.drafts}
								title={'Черновики'}
								description={'Продолжите уже начатые работы'}
								icon={<CodeSquare />}
							/>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>Курсы</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]'>
							<TallMenuItem
								href={routes.course.student}
								title={'Ваши курсы'}
								description={'Посмотрите список курсов которые вы проходите'}
								icon={<BookKey />}
							/>
							<TallMenuItem
								href={routes.course.main}
								title={'Все курсы'}
								description={'Посмотрите список доступных вам курсов '}
								icon={<BookAudio />}
							/>
						</ul>
						<Title className='px-4'>Текущие курсы</Title>
						<ul className='p-4'>
							{courses.slice(0, 3).map(course => (
								<MenuItem
									key={course.courseId}
									title={course.title}
									description={course.description}
									href={routes.course.currentUserCourse(course.courseId)}
								/>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link
						href={routes.code.sandbox}
						className='group inline-flex h-9 w-max cursor-pointer items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
					>
						Календарь
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const TallMenuItem: React.FC<MenuItemType> = ({
	href,
	title,
	description,
	icon
}) => (
	<li className='row-span-3'>
		<NavigationMenuLink asChild>
			<Link
				className={cn(
					'flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
				)}
				href={href}
			>
				{icon}
				<div className='mb-2 mt-4 text-lg font-medium'>{title}</div>
				<p className='text-sm leading-tight text-muted-foreground'>
					{description}
				</p>
			</Link>
		</NavigationMenuLink>
	</li>
)

const MenuItem: React.FC<MenuItemType> = ({
	href,
	title,
	description,
	diff
}) => (
	<li>
		<NavigationMenuLink asChild>
			<Link
				className={cn(
					'grid select-none grid-cols-[1fr_auto] items-center space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-indigo-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
				)}
				href={href}
			>
				<div>
					<h1 className='text-sm font-medium leading-none'>{title}</h1>
					<p className='line-clamp-1 text-sm leading-snug text-muted-foreground'>
						{description}
					</p>
				</div>
				{diff && <TaskDifficultyDot diff={diff} />}
			</Link>
		</NavigationMenuLink>
	</li>
)
