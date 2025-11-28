import { Button } from '../other/button'
import { Loader } from '../view/loader'
import Text from '../view/text'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from './dialog'
import { AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react'
import React, { useState } from 'react'

interface ConfirmModalProps {
	title: string
	message?: string
	onConfirm: () => void
	onCancel?: () => void
	isOpen?: boolean
	variant?: 'destructive' | 'warning' | 'success' | 'default'
	icon?: React.ReactNode
	loading?: boolean
	renderContent?: React.ReactNode
	children?: React.ReactNode
	onOpenChange?: (open: boolean) => void
	description?: string
	showConfirmButton?: boolean
	showCancelButton?: boolean
	confirmButtonLabel?: string
	cancelButtonLabel?: string
}

export const ConfirmModal = ({
	title,
	message,
	onConfirm,
	onCancel,
	isOpen,

	variant = 'default',
	icon,
	loading = false,
	renderContent,
	children,
	onOpenChange,
	description,
	showConfirmButton = true,
	showCancelButton = true,
	confirmButtonLabel = 'Confirm',
	cancelButtonLabel = 'Cancel'
}: ConfirmModalProps) => {
	const [internalOpen, setInternalOpen] = useState(false)

	const isModalOpen = isOpen !== undefined ? isOpen : internalOpen

	const getIcon = () => {
		if (icon) return icon
		switch (variant) {
			case 'destructive':
				return <AlertTriangle className='h-5 w-5 text-red-500' />
			case 'warning':
				return <AlertTriangle className='h-5 w-5 text-amber-500' />
			case 'success':
				return <CheckCircle className='h-5 w-5 text-green-500' />
			default:
				return null
		}
	}

	const getConfirmButtonVariant = () => {
		switch (variant) {
			case 'destructive':
				return 'destructive'
			case 'warning':
				return 'default'
			case 'success':
				return 'primary'
			default:
				return 'primary'
		}
	}

	const handleOpenChange = (open: boolean) => {
		if (onOpenChange) {
			onOpenChange(open)
		} else {
			setInternalOpen(open)
		}

		// Если модал закрывается и есть onCancel, вызываем его
		if (!open && onCancel) {
			onCancel()
		}
	}

	const handleCancel = () => {
		if (onCancel) {
			onCancel()
		}
		if (onOpenChange) {
			onOpenChange(false)
		} else {
			setInternalOpen(false)
		}
	}

	const handleConfirm = () => {
		onConfirm()
		// Автоматически закрываем после подтверждения
		if (onOpenChange) {
			onOpenChange(false)
		} else {
			setInternalOpen(false)
		}
	}

	return (
		<Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
			{children && (
				<DialogTrigger asChild onClick={() => setInternalOpen(true)}>
					{children}
				</DialogTrigger>
			)}
			<DialogContent className='z-[1100] sm:max-w-md'>
				<DialogHeader>
					<div className='flex items-center gap-3'>
						{getIcon()}
						<DialogTitle className='text-left'>{title}</DialogTitle>
					</div>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>

				{renderContent ? (
					<div className='py-4'>{renderContent}</div>
				) : message ? (
					<div className='py-4'>
						<Text color='gray'>{message}</Text>
					</div>
				) : null}

				<div className='flex justify-end gap-3'>
					{showCancelButton && (
						<Button
							variant='outline'
							onClick={handleCancel}
							disabled={loading}
							className='flex-1'
						>
							{cancelButtonLabel}
						</Button>
					)}
					{showConfirmButton && (
						<Button
							variant={getConfirmButtonVariant()}
							onClick={handleConfirm}
							disabled={loading}
							className='flex-1'
						>
							{loading ? (
								<>
									<Loader className='mr-2' />
									Загрузка...
								</>
							) : (
								confirmButtonLabel
							)}
						</Button>
					)}
				</div>
			</DialogContent>
		</Dialog>
	)
}
