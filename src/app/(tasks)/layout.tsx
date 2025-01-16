// import { DashboardFooter } from '@/widgets/footers'
import { RootHeader } from '@/widgets/headers/ui/root-header'
import { UserTasksSidebar } from '@/widgets/task'

export default function DashboardLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<RootHeader />

			<div className='root-page-w grid grid-cols-[350px,1fr] mt-3'>
				<UserTasksSidebar />
				{children}
			</div>
			{/* <DashboardFooter /> */}
		</div>
	)
}
