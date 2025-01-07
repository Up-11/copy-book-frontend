import { LandingFooter } from '@/widgets/footers'
import { LandingHeader } from '@/widgets/headers'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Главная',
	description: 'New era education serivce'
}

export default function LandingLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<LandingHeader />
			{children}
			<LandingFooter />
		</div>
	)
}
