import { RootHeader } from '@/widgets/headers/ui/root-header'

export default function DashboardLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<RootHeader />
			<div className='root-page-w'>{children}</div>
		</div>
	)
}
