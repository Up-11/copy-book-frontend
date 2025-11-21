import { RootHeader } from '@/widgets/headers/ui/root-header'
import { ProfileSidebar } from '@/widgets/profile'

export default function DashboardLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<RootHeader />
			<div className='root-page-w mt-8 grid grid-cols-[250px,1fr]'>
				<ProfileSidebar role='student' />
				<div>{children}</div>
			</div>
		</div>
	)
}
