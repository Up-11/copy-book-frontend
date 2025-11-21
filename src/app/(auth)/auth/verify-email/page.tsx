import { VerifyEmail } from '@/features/auth/ui/verify-email'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Подтверждение почты'
}

export default function AuthResetPassword() {
	return (
		<main className='mx-auto min-h-screen w-full bg-gray-200'>
			<div className='flex h-screen flex-col items-center justify-center gap-3'>
				<div className='w-full max-w-[550px] rounded-xl bg-white p-layout'>
					<VerifyEmail />
				</div>
			</div>
		</main>
	)
}
