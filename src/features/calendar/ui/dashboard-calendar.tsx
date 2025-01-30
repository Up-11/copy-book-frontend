'use client'

import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { getBadgeByTaskDifficulty } from '@/shared/lib/map'
import { getFirstTwoLetters } from '@/shared/lib/utils'
import { dashboardTasks } from '@/shared/mock/mock'
import { Task } from '@/shared/types/task.types'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Separator } from '@/shared/ui/view/separator'
import Text from '@/shared/ui/view/text'
import { addMonths, startOfMonth, endOfMonth, addDays, format } from 'date-fns'
import { ru } from 'date-fns/locale/ru'
import Link from 'next/link'
import React, { useLayoutEffect, useRef } from 'react'

const monthColors = [
	'bg-red-200',
	'bg-orange-200',
	'bg-yellow-200',
	'bg-green-200',
	'bg-teal-200',
	'bg-blue-200',
	'bg-indigo-200',
	'bg-purple-200',
	'bg-pink-200',
	'bg-rose-300',
	'bg-gray-200',
	'bg-emerald-200'
]

export const DashboardCalendar: React.FC = () => {
	const currentDate = new Date()
	const calendarRef = useRef<HTMLDivElement>(null)
	const currentDayRef = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		if (currentDayRef.current && calendarRef.current) {
			const calendarContainer = calendarRef.current
			const currentDayElement = currentDayRef.current

			calendarContainer.scrollTo({
				left: currentDayElement.offsetLeft - calendarContainer.clientWidth / 2,
				behavior: 'instant'
			})
		}
	}, [])

	return (
		<div
			ref={calendarRef}
			className='h-full w-full overflow-x-auto rounded-lg bg-indigo-50'
		>
			<div className='flex h-full'>
				{Array.from({ length: 12 }).map((_, monthOffset) => {
					const monthDate = addMonths(currentDate, monthOffset)
					const startMonth = startOfMonth(monthDate)
					const endMonth = endOfMonth(monthDate)
					const daysInMonth = endMonth.getDate()

					return (
						<div key={monthOffset} className='flex flex-col'>
							<header
								className={cn(
									'flex h-[30%] items-center rounded-lg pl-2 font-bold',
									monthColors[monthDate.getMonth()],
									`w-[${daysInMonth * 50}px]`
								)}
							>
								{format(monthDate, 'LLLL', { locale: ru })}
							</header>
							<div className='flex h-[70%]'>
								{Array.from({ length: daysInMonth }).map((_, dayIndex) => {
									const dayDate = addDays(startMonth, dayIndex)

									const isCurrentDay =
										currentDate.getDate() === dayDate.getDate() &&
										currentDate.getMonth() === dayDate.getMonth()

									const DateString = dayDate.toISOString().split('T')[0]

									const currentTask = dashboardTasks.find(
										task => task?.deadline.split('T')[0] === DateString
									)

									return (
										<CalendarCell
											task={currentTask}
											dayRef={isCurrentDay ? currentDayRef : undefined}
											currentDay={isCurrentDay}
											key={dayIndex}
											day={dayDate}
										/>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
const CalendarCell: React.FC<{
	day: Date
	currentDay: boolean
	dayRef?: React.RefObject<HTMLDivElement>
	task?: Pick<Task, 'id' | 'difficulty' | 'title'>
}> = ({ day, task, currentDay, dayRef }) => {
	const currentTask = task?.difficulty
		? getBadgeByTaskDifficulty(task.difficulty)
		: undefined

	return (
		<div
			ref={dayRef}
			className={cn(
				'flex h-full w-12 cursor-default select-none flex-col items-center justify-center border-r border-r-primary',
				currentDay && 'bg-indigo-200'
			)}
		>
			<Text className='h-[40%]'>{day.getDate().toString()}</Text>
			<Separator className='h-px w-full bg-primary' />
			<div className='flex h-[60%] flex-col items-center justify-center'>
				{task && (
					<Link href={routes.tasks.currentUserTask(task.id)}>
						<UiTooltip content={task.title}>
							<div className={cn('rounded-md p-1', currentTask?.classNames)}>
								{getFirstTwoLetters(task.title)}
							</div>
						</UiTooltip>
					</Link>
				)}
			</div>
		</div>
	)
}
