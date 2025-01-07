import { ResetPassword } from '@/features/reset-password'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Восстановление пароля'
}

export default function AuthResetPassword() {
	return (
		<main className='mx-auto min-h-screen w-full bg-gray-200'>
			<div className='flex h-screen flex-col items-center justify-center gap-3'>
				<div className='h-[450px] w-full max-w-[550px] rounded-xl bg-white p-layout'>
					<ResetPassword />
				</div>
			</div>
		</main>
	)
}
