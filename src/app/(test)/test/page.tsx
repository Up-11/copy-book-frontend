import { QrCode } from '@/features/qr-code/qr-code'
import { RoleBadge } from '@/shared/ui/view/role-badge'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Test'
}
export default function TestPage() {
	return (
		<div className='flex h-screen gap-4 bg-gray-300'>
			<div>
				<RoleBadge role='student' />
				<RoleBadge role='admin' />
				<RoleBadge role='teacher' />
			</div>
			<QrCode qrUrl='https://www.google.co' />
		</div>
	)
}
