import { LoginStudent } from '@/features/auth'
import { RoleBadge } from '@/shared/ui/view/role-badge'
import Title from '@/shared/ui/view/title'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Test',
}
export default function TestPage() {
	return (
		<div className='flex gap-4 bg-gray-300 h-screen'>
			<div>
				<RoleBadge role='student' />
				<RoleBadge role='admin' />
				<RoleBadge role='teacher' />
			</div>
			<div className='flex flex-col gap-2'>
				<Title>Примитив формы</Title>
				<LoginStudent />
			</div>
		</div>
	)
}
