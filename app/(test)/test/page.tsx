import { RoleBadge } from '@/shared/ui/view/role-badge'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Test',
}
export default function TestPage() {
	return (
		<div>
			<RoleBadge role='student' />
			<RoleBadge role='admin' />
			<RoleBadge role='teacher' />
		</div>
	)
}
