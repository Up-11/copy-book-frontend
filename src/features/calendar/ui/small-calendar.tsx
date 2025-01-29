import { routes } from '@/shared/config/routes'
import { IconDropdownTrigger } from '@/shared/ui/custom/icon-dropdown-trigger'
import { UiDropdownMenu } from '@/shared/ui/custom/ui-dropdown-menu'
import { Calendar } from '@/shared/ui/input/calendar'
import { DropdownMenuItem } from '@/shared/ui/modals/dropdown-menu'
import Title from '@/shared/ui/view/title'
import Link from 'next/link'
import React from 'react'

export const SmallCalendar: React.FC = () => {
	return (
		<>
			<div className='flex items-center gap-2'>
				<UiDropdownMenu
					label='Навигация'
					className='ml-2 border-transparent px-0 text-xl shadow-md outline-none'
					items={
						<>
							<Link href={routes.course.student}>
								<DropdownMenuItem className='rounded-none hover:bg-destructive'>
									К курсам
								</DropdownMenuItem>
							</Link>
							<Link href={routes.tasks.student}>
								<DropdownMenuItem className='rounded-none hover:bg-destructive'>
									К заданиям
								</DropdownMenuItem>
							</Link>
							<Link href={routes.dashboard.student}>
								<DropdownMenuItem className='rounded-none hover:bg-destructive'>
									На главную
								</DropdownMenuItem>
							</Link>
						</>
					}
				>
					<IconDropdownTrigger className='hover:bg-accent' />
				</UiDropdownMenu>
				<Title size='large'>Календарь</Title>
			</div>
			<Calendar />
		</>
	)
}
