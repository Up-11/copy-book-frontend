'use client'

import { useFindProfileQuery } from '@/shared/graphql/generated/output'
import { getFirstTwoLetters } from '@/shared/lib/utils'
import { Badge } from '@/shared/ui/badge'
import { Card, CardContent, CardHeader } from '@/shared/ui/card'
import { UiAvatar } from '@/shared/ui/custom/ui-avatar'
import { Button } from '@/shared/ui/other/button'
import { Skeleton } from '@/shared/ui/other/skeleton'
import { RoleBadge } from '@/shared/ui/view/role-badge'
import { TitleWithSeparator } from '@/shared/ui/view/title-with-separator'
import React from 'react'

export const ProfileInfo: React.FC = () => {
	const { data, loading, error, refetch } = useFindProfileQuery()

	const user = data?.findProfile

	if (loading) {
		return <ProfileSkeleton />
	}

	if (error) {
		return (
			<div className='flex flex-col items-center justify-center p-8'>
				<div className='mb-4 text-red-500'>Ошибка загрузки профиля</div>
				<Button onClick={() => refetch()} variant='outline'>
					Попробовать снова
				</Button>
			</div>
		)
	}

	if (!user) {
		return (
			<div className='p-8 text-center'>
				<div className='text-gray-500'>Профиль не найден</div>
			</div>
		)
	}

	return (
		<div className='space-y-6'>
			<TitleWithSeparator title='Подробная информация о профиле' />

			<div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
				<Card className='lg:col-span-2'>
					<CardHeader>
						<h2 className='text-xl font-semibold'>Основная информация</h2>
					</CardHeader>
					<CardContent className='space-y-4'>
						<div className='flex items-center space-x-4'>
							<UiAvatar
								className='size-20 text-3xl'
								avatarUrl={user?.avatar}
								fallbackText={getFirstTwoLetters(
									`${user?.firstName} ${user?.lastName}`
								)}
							/>
							<div>
								<h1 className='text-2xl font-bold'>
									{user.firstName} {user.lastName}
								</h1>
								<div className='mt-1 flex items-center space-x-2'>
									<RoleBadge role={user.role} />
									<StatusBadge
										isEmailVerified={user.isEmailVerified}
										isDeactivated={user.isDeactivated}
									/>
								</div>
							</div>
						</div>

						<div className='grid grid-cols-1 gap-4 pt-4 md:grid-cols-2'>
							<InfoField label='Email' value={user.email} />
							<InfoField
								label='Статус email'
								value={user.isEmailVerified ? 'Подтвержден' : 'Не подтвержден'}
								valueClassName={
									user.isEmailVerified ? 'text-green-600' : 'text-yellow-600'
								}
							/>
							{user.bio && (
								<InfoField
									label='О себе'
									value={user.bio}
									className='md:col-span-2'
								/>
							)}
						</div>
					</CardContent>
				</Card>

				<Card className='lg:col-span-1'>
					<CardHeader>
						<h2 className='text-xl font-semibold'>Временные метки</h2>
					</CardHeader>
					<CardContent>
						<div className='flex flex-col gap-2'>
							<InfoField
								label='Дата регистрации'
								value={new Date(user.createdAt).toLocaleDateString('ru-RU')}
							/>
							<InfoField
								label='Последнее обновление'
								value={new Date(user.updatedAt).toLocaleDateString('ru-RU')}
							/>

							{user.deactivatedAt && (
								<InfoField
									label='Дата деактивации'
									value={new Date(user.deactivatedAt).toLocaleDateString(
										'ru-RU'
									)}
									valueClassName='text-red-600'
								/>
							)}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

// Компонент для отображения поля информации
interface InfoFieldProps {
	label: string
	value: string
	className?: string
	valueClassName?: string
	copyable?: boolean
}

const InfoField: React.FC<InfoFieldProps> = ({
	label,
	value,
	className = '',
	valueClassName = '',
	copyable = false
}) => {
	const handleCopy = () => {
		navigator.clipboard.writeText(value)
	}

	return (
		<div className={className}>
			<label className='text-sm font-medium text-gray-500'>{label}</label>
			<div className='flex items-center justify-between'>
				<span className={`text-base ${valueClassName}`}>{value}</span>
				{copyable && (
					<Button
						variant='ghost'
						size='sm'
						onClick={handleCopy}
						className='ml-2'
					>
						Копировать
					</Button>
				)}
			</div>
		</div>
	)
}

// Компонент для отображения статусов
interface StatusBadgeProps {
	isEmailVerified: boolean
	isDeactivated: boolean
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
	isEmailVerified,
	isDeactivated
}) => {
	if (isDeactivated) {
		return <Badge variant='destructive'>Деактивирован</Badge>
	}

	if (!isEmailVerified) {
		return <Badge variant='outline'>Email не подтвержден</Badge>
	}

	return <Badge variant='secondary'>Активен</Badge>
}

// Скелетон для загрузки
const ProfileSkeleton: React.FC = () => {
	return (
		<div className='space-y-6'>
			<TitleWithSeparator title='Подробная информация о профиле' />
			<div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
				<Card className='lg:col-span-2'>
					<CardHeader>
						<Skeleton className='h-6 w-48' />
					</CardHeader>
					<CardContent className='space-y-4'>
						<div className='flex items-center space-x-4'>
							<Skeleton className='h-20 w-20 rounded-full' />
							<div className='space-y-2'>
								<Skeleton className='h-6 w-48' />
								<Skeleton className='h-4 w-24' />
							</div>
						</div>
						<div className='grid grid-cols-1 gap-4 pt-4 md:grid-cols-2'>
							{Array.from({ length: 4 }).map((_, i) => (
								<div key={i} className='space-y-2'>
									<Skeleton className='h-4 w-20' />
									<Skeleton className='h-5 w-32' />
								</div>
							))}
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<Skeleton className='h-6 w-36' />
					</CardHeader>
					<CardContent className='space-y-4'>
						{Array.from({ length: 3 }).map((_, i) => (
							<div key={i} className='space-y-2'>
								<Skeleton className='h-4 w-28' />
								<Skeleton className='h-5 w-full' />
							</div>
						))}
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default ProfileInfo
