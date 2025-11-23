import { useGetUserRecoveryCodesQuery } from '@/shared/graphql/generated/output'
import { Modal } from '@/shared/ui/modals/modal'
import { Button } from '@/shared/ui/other/button'
import { Skeleton } from '@/shared/ui/other/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/view/alert'
import { CircleAlert, Copy, Download } from 'lucide-react'
import { PropsWithChildren, useState } from 'react'

export const RecoveryCodesModal: React.FC<PropsWithChildren> = ({
	children
}) => {
	const { data, loading } = useGetUserRecoveryCodesQuery()
	const [copied, setCopied] = useState(false)

	const recoveryCodes = data?.getUserRecoveryCodes || []

	const handleCopyCodes = async () => {
		const codesText = recoveryCodes.join(',')
		await navigator.clipboard.writeText(codesText)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	const handleDownload = () => {
		const codesText = recoveryCodes.join('\n')
		const blob = new Blob([codesText], { type: 'text/plain' })
		const url = URL.createObjectURL(blob)
		const a = document.createElement('a')
		a.href = url
		a.download = 'recovery-codes.txt'
		document.body.appendChild(a)
		a.click()
		document.body.removeChild(a)
		URL.revokeObjectURL(url)
	}

	const RecoveryCodesContent = () => {
		if (loading) {
			return (
				<div className='space-y-2'>
					{Array.from({ length: 6 }, (_, i) => (
						<Skeleton key={i} className='h-8 w-full' />
					))}
				</div>
			)
		}

		return (
			<div className='space-y-4'>
				{/* Список кодов */}
				<div className='grid grid-cols-2 gap-3'>
					{recoveryCodes.map((code, index) => (
						<div
							key={index}
							className='rounded-lg border border-gray-200 bg-gray-100 p-3 text-center font-mono text-lg font-bold'
						>
							{code}
						</div>
					))}
				</div>

				{/* Кнопки действий */}
				<div className='flex gap-2'>
					<Button
						variant='outline'
						size='sm'
						onClick={handleCopyCodes}
						className='flex-1'
					>
						<Copy className='mr-2 h-4 w-4' />
						{copied ? 'Скопировано!' : 'Копировать все'}
					</Button>
					<Button
						variant='outline'
						size='sm'
						onClick={handleDownload}
						className='flex-1'
					>
						<Download className='mr-2 h-4 w-4' />
						Скачать
					</Button>
				</div>

				{/* Предупреждение */}
				<Alert variant='destructive'>
					<CircleAlert className='h-4 w-4' />
					<AlertTitle>Сохраните коды в надежном месте!</AlertTitle>
					<AlertDescription className='mt-2'>
						Эти коды необходимы для восстановления доступа к аккаунту, если вы
						потеряете доступ к email или захотите отменить деактивацию аккаунта.
						Каждый код можно использовать только один раз.
					</AlertDescription>
				</Alert>
			</div>
		)
	}

	return (
		<Modal
			title='Коды восстановления доступа'
			description='Сохраните эти коды в безопасном месте. Они понадобятся, если вы потеряете доступ к своему email или захотите отменить деактивацию аккаунта.'
			content={<RecoveryCodesContent />}
		>
			{children}
		</Modal>
	)
}
