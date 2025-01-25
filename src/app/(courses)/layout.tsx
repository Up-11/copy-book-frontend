// import { DashboardFooter } from '@/widgets/footers'
import { StudentSidebar } from '@/common/task-and-course'
import { RootHeader } from '@/widgets/headers/ui/root-header'

export default function StudentCourseLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<RootHeader />
			<div className='root-page-w mt-3 grid grid-cols-[350px,1fr]'>
				<StudentSidebar isTask={false} />
				<div className='h-full'>{children}</div>
			</div>
			{/* <DashboardFooter /> */}
		</div>
	)
}
