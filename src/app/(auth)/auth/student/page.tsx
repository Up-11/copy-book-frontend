import '@/app/styles/auth.styles.css'
import { AuthWidget } from '@/widgets/auth'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Авторизация ученика'
}

export default function AuthStudentPage() {
	return (
		<main className='mx-auto min-h-screen w-full'>
			<div className='auth-bg-image fixed inset-0 -z-10 bg-gray-200'></div>
			<div className='flex h-full flex-col items-center gap-3'>
				<AuthWidget />
			</div>
		</main>
	)
}
