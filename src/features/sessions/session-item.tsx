import { getBrowserIcon } from './lib/get-browser-icon'
import {
	FindSessionByUserQuery,
	useRemoveSessionMutation
} from '@/shared/api/graphql/generated/output'
import { Modal } from '@/shared/ui/modals/modal'
import { Button } from '@/shared/ui/other/button'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useState } from 'react'
import { toast } from 'sonner'

interface SessionItemProps {
	session: FindSessionByUserQuery['findSessionByUser'][0]
	isCurrentSession?: boolean
	refetchSessions?: () => void
}

export const SessionItem = ({
	session,
	isCurrentSession,
	refetchSessions
}: SessionItemProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [removeSession, { loading }] = useRemoveSessionMutation({
		onCompleted() {
			toast.success('Сессия успешно удалена')
		},
		onError(error) {
			toast.error(error.message)
		}
	})
	if (!session || !session.metadata) {
		return null
	}

	const BrowserIcon = getBrowserIcon(session.metadata.device.browser)
	const formattedDate = format(
		new Date(session.createdAt),
		'dd MMMM yyyy, HH:mm',
		{ locale: ru }
	)

	const onSessionDelete = async () => {
		await removeSession({ variables: { id: session.id } })
		setIsOpen(false)
		refetchSessions()
	}

	const SessionDetails = () => (
		<div className='space-y-4'>
			{/* Основная информация */}
			<div className='grid grid-cols-2 gap-4'>
				<div>
					<h4 className='font-medium text-gray-700'>Браузер</h4>
					<p className='text-gray-900'>{session.metadata.device.browser}</p>
				</div>
				<div>
					<h4 className='font-medium text-gray-700'>Операционная система</h4>
					<p className='text-gray-900'>{session.metadata.device.os}</p>
				</div>
			</div>

			{/* Локация */}
			<div>
				<h4 className='font-medium text-gray-700'>Местоположение</h4>
				<p className='text-gray-900'>
					{session.metadata.location?.country || 'Не определено'}
					{session.metadata.location?.city &&
						`, ${session.metadata.location.city}`}
				</p>
			</div>

			{/* Сетевые данные */}
			<div className='grid grid-cols-2 gap-4'>
				<div>
					<h4 className='font-medium text-gray-700'>IP адрес</h4>
					<p className='font-mono text-gray-900'>{session.metadata.ip}</p>
				</div>
				<div>
					<h4 className='font-medium text-gray-700'>Дата входа</h4>
					<p className='text-gray-900'>{formattedDate}</p>
				</div>
			</div>

			{/* ID сессии */}
			<div>
				<h4 className='font-medium text-gray-700'>ID сессии</h4>
				<p className='break-all font-mono text-sm text-gray-900'>
					{session.id}
				</p>
			</div>

			{/* Статус */}
			<div>
				<h4 className='font-medium text-gray-700'>Статус</h4>
				<p className='text-gray-900'>
					{isCurrentSession ? 'Текущая сессия' : 'Неактивная сессия'}
				</p>
			</div>
		</div>
	)

	return (
		<div className='flex items-center justify-between rounded-lg border bg-gray-50 p-4 transition-colors'>
			<div className='flex flex-1 items-center gap-4'>
				<div className='flex-shrink-0'>
					<BrowserIcon className='h-8 w-8 text-gray-600' />
				</div>

				<div className='min-w-0 flex-1'>
					<div className='mb-1 flex items-center gap-2'>
						<span className='truncate font-medium text-gray-900'>
							{session.metadata.device.browser}, {session.metadata.device.os}
						</span>
						{isCurrentSession && (
							<div className='rounded bg-green-100 px-2 py-1 text-xs text-green-800'>
								Текущая
							</div>
						)}
					</div>

					<div className='flex flex-wrap gap-4 text-sm text-gray-600'>
						<div className='flex items-center gap-1'>
							<span>
								{session.metadata.location?.country || 'Неизвестно'}
								{session.metadata.location?.city &&
									`, ${session.metadata.location.city}`}
							</span>
						</div>
					</div>
				</div>

				<Modal
					open={isOpen}
					onOpenChange={setIsOpen}
					title='Подробная информация о сессии'
					content={<SessionDetails />}
					footer={
						<>
							{!isCurrentSession && (
								<Button
									variant='destructive'
									loading={loading}
									onClick={onSessionDelete}
									size='sm'
								>
									Завершить сессию
								</Button>
							)}
						</>
					}
				>
					<Button variant='primary' size='sm'>
						Подробнее
					</Button>
				</Modal>
			</div>
		</div>
	)
}
