import { routes } from '@/shared/config/routes'
import { IconDropdownTrigger } from '@/shared/ui/custom/icon-dropdown-trigger'
import { UiAvatar } from '@/shared/ui/custom/ui-avatar'
import { UiDropdownMenu } from '@/shared/ui/custom/ui-dropdown-menu'
import { DropdownMenuItem } from '@/shared/ui/modals/dropdown-menu'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import Link from 'next/link'
import React from 'react'

export const ComplitionHeader: React.FC<{
	title: string
	teacher?: string
}> = ({ title, teacher }) => {
	return (
		<header className='fixed inset-x-0 top-0 flex h-16 items-center justify-between gap-5 bg-background p-2'>
			<div className='flex items-center gap-5'>
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
				<Title>{title}</Title>
			</div>
			<div className='flex items-center gap-14'>
				{teacher && (
					<div className='flex items-center gap-1'>
						<Text className='font-light'>Создатель: </Text>
						<Text>{teacher}</Text>
					</div>
				)}
				<Link
					href={routes.profile.personal}
					className='flex items-center gap-1'
				>
					<Text size='small'>Иван Иванов</Text>
					<UiAvatar />
				</Link>
			</div>
		</header>
	)
}
