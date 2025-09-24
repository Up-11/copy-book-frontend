'use client'

import { QrCode } from '@/features/qr-code/qr-code'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/shared/ui/modals/sheet'
import { Button } from '@/shared/ui/other/button'
import Title from '@/shared/ui/view/title'
import React from 'react'
import { toast } from 'sonner'
import { useCopyToClipboard } from 'usehooks-ts'

export const ShareSidebar: React.FC<{
	qrUrl: string
	title: string
	description?: string
	trigger: React.ReactNode
}> = ({ qrUrl, title, description, trigger }) => {
	const [copiedText, copy] = useCopyToClipboard()

	const handleCopy = (text: string) => () => {
		copy(text)
			.then(() => {
				toast(`Скопировано в буфер обмена`)
			})
			.catch(error => {
				console.error('Failed to copy!', error)
			})
	}
	return (
		<Sheet>
			<SheetTrigger asChild>{trigger}</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>{title}</SheetTitle>
					<SheetDescription>{description}</SheetDescription>
				</SheetHeader>
				<div className='mt-2 flex flex-col items-center justify-center gap-4 text-center'>
					<Title>QR-код для того чтобы поделиться материалом</Title>
					<QrCode qrUrl={qrUrl} />
					<Title>Ссылка на материал</Title>
					<Button onClick={handleCopy(qrUrl)}>Скопировать ссылку</Button>
				</div>
			</SheetContent>
		</Sheet>
	)
}
