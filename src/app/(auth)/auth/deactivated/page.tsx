import '@/app/styles/auth.styles.css'
import { routes } from '@/shared/config/routes'
import { Button } from '@/shared/ui/other/button'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
	title: 'Ваш аккаунт деактивирован'
}

interface PageProps {
	searchParams: {
		userId?: string
	}
}

export default function DeactivatedPage({ searchParams }: PageProps) {
	const { userId } = searchParams

	return (
		<main className='mx-auto min-h-screen w-full'>
			<div className='auth-bg-image fixed inset-0 -z-10 bg-gray-200'></div>
			<div className='flex h-screen flex-col items-center justify-center gap-3'>
				<div className='w-full max-w-md rounded-xl bg-white p-8 shadow-lg'>
					<div className='text-center'>
						{/* Иконка или аватар */}
						<div className='mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100'>
							<svg
								className='h-8 w-8 text-red-600'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z'
								/>
							</svg>
						</div>

						{/* Заголовок */}
						<h1 className='mb-4 text-2xl font-bold text-gray-900'>
							Аккаунт деактивирован
						</h1>

						{/* Основной текст */}
						<p className='mb-6 text-gray-600'>
							К сожалению, ваш аккаунт был деактивирован. Мы будем скучать по
							вам!
						</p>

						{/* ID пользователя */}
						{userId && (
							<div className='mb-6 rounded-lg bg-gray-50 p-4'>
								<p className='mb-2 text-sm font-medium text-gray-700'>
									ID для восстановления:
								</p>
								<p className='break-all font-mono text-lg font-bold text-gray-900'>
									{userId}
								</p>
								<p className='mt-2 text-xs text-gray-500'>
									Сохраните этот ID для обращения в поддержку
								</p>
							</div>
						)}

						{/* Дополнительная информация */}
						<div className='rounded-lg border border-blue-100 bg-blue-50 p-4'>
							<p className='text-sm text-blue-700'>
								Если это произошло по ошибке, вы можете восстановить аккаунт
								обратившись в службу поддержки с указанием вашего ID.
							</p>
						</div>

						<Button variant={'primary'} className='mt-4' size={'lg'}>
							{' '}
							Обратиться в поддержку
						</Button>
						<Link href={routes.home}>
							<Button variant={'default'} className='mt-4' size={'sm'}>
								Выйти
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</main>
	)
}
