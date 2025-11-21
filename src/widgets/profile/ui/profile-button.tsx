'use client'

import { routes } from '@/shared/config/routes'
import { getBadgeByUserRole } from '@/shared/lib/map'
import { getFirstTwoLetters } from '@/shared/lib/utils'
import { useAuthStore } from '@/shared/store/auth-store'
import { useRoleStore } from '@/shared/store/user-role.store'
import { UiAvatar } from '@/shared/ui/custom/ui-avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/shared/ui/modals/dropdown-menu'
import Text from '@/shared/ui/view/text'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const ProfileButton: React.FC = () => {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])
	const getFullName = useAuthStore(state => state.getFullName)
	const email = useAuthStore(state => state.email)
	const role = useRoleStore(state => state.role)

	const fullName = isClient ? getFullName() : ''
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='flex items-center gap-2'>
				<Text size='small'>{fullName}</Text>
				<UiAvatar fallbackText={getFirstTwoLetters(fullName)} />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel> Мой Аккаунт</DropdownMenuLabel>
				<DropdownMenuGroup>
					<DropdownMenuItem className='hover:bg-gray-100'>
						<Link href={routes.profile.personal}>Личные данные</Link>
					</DropdownMenuItem>
					<DropdownMenuItem className='hover:bg-gray-100'>
						<Link href={routes.profile.personal}>Безопасность</Link>
					</DropdownMenuItem>

					<DropdownMenuSeparator></DropdownMenuSeparator>
					<DropdownMenuItem className='hover:bg-gray-100'>
						<Link href={routes.profile.personal}>Настройки</Link>
					</DropdownMenuItem>
					<DropdownMenuItem className='hover:bg-gray-100'>
						<Link href={routes.profile.personal}>Статистика</Link>
					</DropdownMenuItem>

					<DropdownMenuSeparator></DropdownMenuSeparator>
					<DropdownMenuLabel> Информация о аккаунте</DropdownMenuLabel>
					<DropdownMenuLabel className='text-xs'>
						Роль: {getBadgeByUserRole(role).text}
					</DropdownMenuLabel>
					<DropdownMenuLabel className='text-xs'>
						Почта: {email}
					</DropdownMenuLabel>
					<DropdownMenuItem className='hover:bg-gray-100'>
						<Link href={routes.profile.personal}>Подробнее</Link>
					</DropdownMenuItem>

					<DropdownMenuSeparator></DropdownMenuSeparator>
					<DropdownMenuItem className='hover:bg-red-100'>
						<Link href={routes.profile.personal}>Выход из аккаунта</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
