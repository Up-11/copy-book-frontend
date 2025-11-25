'use client'

import { LogoutButton } from './logout-button'
import { ChangeEmailModal } from '@/features/auth/ui/change-email-modal'
import { DeactivateAccountModal } from '@/features/deactivate/deactivate-account-modal'
import { RecoveryCodesModal } from '@/features/recovery/recovery-codes-modal'
import { NewPasswordModal } from '@/features/reset-password/ui/new-password-modal'
import { SessionItem } from '@/features/sessions/session-item'
import { SessionList } from '@/features/sessions/session-list'
import {
	useFindCurrentSessionQuery,
	useFindSessionByUserQuery,
	useRemoveSessionMutation
} from '@/shared/api/graphql/generated/output'
import { routes } from '@/shared/config/routes'
import { useIsAuth } from '@/shared/hooks/is-auth'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui/modals/dialog'
import { Modal } from '@/shared/ui/modals/modal'
import { Button } from '@/shared/ui/other/button'
import { Skeleton } from '@/shared/ui/other/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/view/alert'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { TitleWithSeparator } from '@/shared/ui/view/title-with-separator'
import { CircleAlert } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'

export const ProfileSecurity = () => {
	const [isOpen, setIsOpen] = useState(false)

	const { logout } = useIsAuth()
	const {
		data: sessions,
		loading: sessionsLoading,
		refetch
	} = useFindSessionByUserQuery()
	const { data: currentSession, loading: currentSessionLoading } =
		useFindCurrentSessionQuery()

	const [removeSession, { loading: removeSessionLoading }] =
		useRemoveSessionMutation()

	const removeAllActiveSessions = async () => {
		if (!sessions?.findSessionByUser?.length) return
		try {
			await Promise.all(
				sessions.findSessionByUser.map(session =>
					removeSession({ variables: { id: session.id } })
				)
			)
			await refetch()
			toast.success('Все сессии завершены')
		} catch (error) {
			console.error('Error removing sessions:', error)
			toast.error('Ошибка при завершении сессий')
		}
	}

	const canRemoveAllSessions = !sessions?.findSessionByUser?.length

	const onChangePassword = async () => {
		await removeAllActiveSessions()
		logout()
	}

	return (
		<div className='flex flex-col gap-10'>
			<div className='flex flex-col gap-3'>
				<TitleWithSeparator title='Смена электронной почты' />
				<Text size='small'>
					Для обновления электронной почты, введите новый адрес электронной
					почты, затем вам придет письмо с подтверждением. После подтверждения
					ваша электронная почта будет обновлена.
				</Text>
				<ChangeEmailModal>
					<Button size='sm' className='self-start'>
						Изменить электронную почту
					</Button>
				</ChangeEmailModal>
				<Alert variant='destructive' className='space-x-1'>
					<CircleAlert />
					<AlertTitle>Будьте внимательны!</AlertTitle>

					<AlertDescription>
						После подтверждения смены email, вход в аккаунт будет возможен
						только с нового адреса. В случае ошибки обратитесь в{' '}
						<Link
							href={routes.profile.support}
							className='text-indigo-950 underline hover:text-indigo-800'
						>
							службу поддержки
						</Link>{' '}
						для восстановления доступа.
					</AlertDescription>
				</Alert>
			</div>
			<div className='flex flex-col gap-3'>
				<TitleWithSeparator title='Смена пароля' />
				<Text size='small'>
					Для обновления пароля, введите старый пароль, затем новый пароль,
					затем подтвердите новый пароль. После подтверждения ваш пароль будет
					обновлен.
				</Text>
				<NewPasswordModal onSuccess={onChangePassword}>
					<Button size='sm' className='self-start'>
						Изменить пароль
					</Button>
				</NewPasswordModal>
				<Alert variant='destructive' className='space-x-1'>
					<CircleAlert />
					<AlertTitle>Внимание!</AlertTitle>
					<AlertDescription>
						После смены пароля все активные сессии будут завершены, и
						потребуется войти в аккаунт заново.
					</AlertDescription>
				</Alert>
			</div>
			<div className='flex flex-col gap-3'>
				<TitleWithSeparator title='Сессии' />
				<Text size='small'>
					В это разделе вы видите все активные сессии вашего аккаунта -
					устройства и браузеры, на которых вы сейчас авторизованы. Вы можете
					просматривать информацию о сессиях и при необходимости завершать
					подозрительные или ненужные подключения.
				</Text>
				<div className='flex flex-col gap-2'>
					<Title>Текущая сессия</Title>
					{currentSessionLoading ? (
						<Skeleton className='h-20' />
					) : (
						<SessionItem
							session={currentSession!.findCurrentSession}
							isCurrentSession
						/>
					)}

					<Title>Активные сессии</Title>
					{sessionsLoading ? (
						Array.from({ length: 5 }, (_, i) => (
							<Skeleton key={i} className='h-20' />
						))
					) : sessions?.findSessionByUser &&
					  sessions.findSessionByUser.length > 0 ? (
						<SessionList
							sessions={sessions.findSessionByUser}
							refetchSessions={refetch}
						/>
					) : (
						<div className='pt-8 text-center text-gray-500'>
							Активные сессии не найдены
						</div>
					)}
				</div>
				<div className='my-5'>
					{!canRemoveAllSessions && (
						<Modal
							title='Завершить все сессии'
							description='Выйти из всех сессий кроме текущей'
							footer={
								<Button
									onClick={removeAllActiveSessions}
									loading={removeSessionLoading}
									variant={'default'}
									className='w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
								>
									Завершить все сессии
								</Button>
							}
						>
							<Button
								loading={removeSessionLoading}
								disabled={canRemoveAllSessions}
								variant={'outline'}
								className='w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
							>
								Завершить все сессии
							</Button>
						</Modal>
					)}
				</div>
			</div>
			<div className='flex flex-col gap-3'>
				<TitleWithSeparator title='Коды восстановления' />
				<Text size='small'>
					Коды восстановления - это уникальные коды, которые вы можете
					использовать для восстановления доступа к вашему аккаунту, если вы
					забыли пароль или потеряли доступ к вашему аккаунту. Каждый код
					восстановления может быть использован только один раз.
				</Text>
				<RecoveryCodesModal>
					<Button size='sm' className='self-start' variant='destructive'>
						Просмотреть коды
					</Button>
				</RecoveryCodesModal>
			</div>
			<div className='flex flex-col gap-3'>
				<TitleWithSeparator title='Деактивация аккаунта' />
				<Text size='small'>
					Если вы решили прекратить использование нашей платформы, вы можете
					деактивировать свой аккаунт. В течение 30 дней все ваши данные будут
					сохранены, после чего аккаунт и вся связанная информация будут
					безвозвратно удалены.
				</Text>
				<DeactivateAccountModal>
					<Button size='sm' className='self-start' variant='destructive'>
						Деактивировать аккаунт
					</Button>
				</DeactivateAccountModal>
				<Alert variant='destructive' className='space-x-1'>
					<CircleAlert />
					<AlertTitle>Важно!</AlertTitle>
					<AlertDescription>
						После деактивации восстановить аккаунт самостоятельно будет
						невозможно. Вернуть доступ можно только обратившись в{' '}
						<Link
							href={routes.profile.support}
							className='text-indigo-950 underline hover:text-indigo-800'
						>
							службу поддержки
						</Link>{' '}
						в течение 30-дневного периода.
					</AlertDescription>
				</Alert>
			</div>
			<div className='mb-4 flex flex-col gap-3'>
				<TitleWithSeparator title='Выйти из аккаунта' />
				<Text size='small'>
					При выходе из аккаунта все ваша текущая сессия будет завершена. Вы
					будете перенаправлены на страницу входа. Для повторного доступа
					потребуется ввести email и пароль. Несохраненные данные могут быть
					утеряны.
				</Text>
				<Dialog open={isOpen} onOpenChange={setIsOpen}>
					<DialogTrigger asChild>
						<Button>Выйти из аккаунта</Button>
					</DialogTrigger>
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
							</Button>{' '}
							<LogoutButton />
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	)
}
