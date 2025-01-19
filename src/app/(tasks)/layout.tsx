// import { DashboardFooter } from '@/widgets/footers'
import { StudentSidebar } from '@/common/task-and-course'
import { RootHeader } from '@/widgets/headers/ui/root-header'

export default function DashboardLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<RootHeader />
			<div className='root-page-w grid grid-cols-[350px,1fr] mt-3'>
				<StudentSidebar />
				<div className='h-full'>{children}</div>
			</div>
			{/* <DashboardFooter /> */}
		</div>
	)
}
