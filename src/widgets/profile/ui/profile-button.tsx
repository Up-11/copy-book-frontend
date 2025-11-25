'use client'

import { LogoutButton } from './logout-button'
import { routes } from '@/shared/config/routes'
import { useUserDataSync } from '@/shared/hooks/use-sync-user-data'
import { cn } from '@/shared/lib/css'
import { getBadgeByUserRole } from '@/shared/lib/map'
import { getFirstTwoLetters } from '@/shared/lib/utils'
import { PropsWithClassName } from '@/shared/types/props.types'
import { UiAvatar } from '@/shared/ui/custom/ui-avatar'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from '@/shared/ui/modals/dialog'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/shared/ui/modals/dropdown-menu'
import { Button } from '@/shared/ui/other/button'
import { Skeleton } from '@/shared/ui/other/skeleton'
import Text from '@/shared/ui/view/text'
import { getMediaSource } from '@/shared/utils/get-media-source'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const ProfileButton: React.FC<PropsWithClassName> = ({ className }) => {
	const [isClient, setIsClient] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	const { user, loading } = useUserDataSync()

	return (
		<>
			{loading ? (
				<Skeleton className='h-10 w-10 rounded-full' />
			) : (
				user && (
					<>
						<DropdownMenu modal={false}>
							<DropdownMenuTrigger className='flex items-center gap-2'>
								<Text size='small' className={cn(className)}>
									{`${user.firstName} ${user.lastName}`}
								</Text>
								<UiAvatar
									fallbackText={getFirstTwoLetters(
										`${user.firstName} ${user.lastName}`
									)}
									avatarUrl={getMediaSource(user.avatar! || '')}
								/>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel> Мой Аккаунт</DropdownMenuLabel>
								<DropdownMenuGroup>
									<DropdownMenuItem className='hover:bg-gray-100'>
										<Link href={routes.profile.personal}>Личные данные</Link>
									</DropdownMenuItem>
									<DropdownMenuItem className='hover:bg-gray-100'>
										<Link href={routes.profile.security}>Безопасность</Link>
									</DropdownMenuItem>

									<DropdownMenuSeparator></DropdownMenuSeparator>
									<DropdownMenuItem className='hover:bg-gray-100'>
										<Link href={routes.profile.settings}>Настройки</Link>
									</DropdownMenuItem>
									<DropdownMenuItem className='hover:bg-gray-100'>
										<Link href={routes.profile.statistic}>Статистика</Link>
									</DropdownMenuItem>

									<DropdownMenuSeparator></DropdownMenuSeparator>
									<DropdownMenuItem className='hover:bg-gray-100'>
										<Link href={routes.profile.notifications}>Уведомления</Link>
									</DropdownMenuItem>
									<DropdownMenuItem className='hover:bg-gray-100'>
										<Link href={routes.profile.history}>История</Link>
									</DropdownMenuItem>
									<DropdownMenuItem className='hover:bg-gray-100'>
										<Link href={routes.profile.support}>Поддержка</Link>
									</DropdownMenuItem>

									<DropdownMenuSeparator></DropdownMenuSeparator>
									<DropdownMenuLabel> Информация о аккаунте</DropdownMenuLabel>
									<DropdownMenuLabel className='text-xs'>
										Роль: {getBadgeByUserRole(user.role!).text}
									</DropdownMenuLabel>
									<DropdownMenuLabel className='text-xs'>
										Почта: {user.email}
									</DropdownMenuLabel>
									<DropdownMenuItem className='hover:bg-gray-100'>
										<Link href={routes.profile.accountInfo}>Подробнее</Link>
									</DropdownMenuItem>

									<DropdownMenuSeparator></DropdownMenuSeparator>

									<DropdownMenuItem
										className='hover:bg-red-100'
										onClick={() => setIsOpen(true)}
									>
										Выход из аккаунта
									</DropdownMenuItem>
								</DropdownMenuGroup>
							</DropdownMenuContent>
						</DropdownMenu>
						<Dialog open={isOpen} onOpenChange={setIsOpen}>
							<DialogContent className='z-[1100]'>
								<DialogHeader>
									<DialogTitle>Выход из аккаунта</DialogTitle>
									<DialogDescription>
										Вы уверены, что хотите выйти из аккаунта?
									</DialogDescription>
								</DialogHeader>

								<DialogFooter className='flex w-full !justify-between'>
									<Button variant='secondary' onClick={() => setIsOpen(false)}>
										Остаться
									</Button>
									<LogoutButton />
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</>
				)
			)}
		</>
	)
}
