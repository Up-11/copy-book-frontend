import { AuthStudent } from '@/widgets/auth'
import React from 'react'
import './auth.styles.scss'

export const AuthStudentPage: React.FC = () => {
	return (
		<main className=' mx-auto min-h-screen   w-full bg-gray-200 auth-bg-image '>
			<div className=' flex h-full flex-col  gap-3 items-center'>
				<AuthStudent />
			</div>
		</main>
	)
}
