'use client'

import { Alert, AlertDescription, AlertTitle } from './view/alert'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

export function CookieNotice() {
	const storageKey = 'cookie_notice_hidden'
	const [hidden, setHidden] = useState(false)

	useEffect(() => {
		const saved = localStorage.getItem(storageKey)
		if (saved === 'true') setHidden(true)
	}, [])

	const close = () => {
		setHidden(true)
		localStorage.setItem(storageKey, 'true')
	}

	if (hidden) return null

	return (
		<div className='fixed bottom-4 left-1/2 z-50 w-[95%] max-w-2xl -translate-x-1/2'>
			<Alert className='relative border border-border bg-white pr-10 shadow-lg dark:bg-slate-900'>
				<AlertTitle className='font-semibold'>
					На этом сайте используются Cookies.
				</AlertTitle>

				<AlertDescription>
					Cookies нужны для обеспечения работы сайта и анализа того, как он
					используется.
				</AlertDescription>

				<button
					onClick={close}
					className='absolute right-3 top-3 text-muted-foreground transition hover:text-foreground'
					aria-label='Закрыть уведомление'
				>
					<X size={18} />
				</button>
			</Alert>
		</div>
	)
}

export default CookieNotice
