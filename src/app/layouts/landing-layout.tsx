import { LandingFooter } from '@/widgets/footers'
import { LandingHeader } from '@/widgets/headers'

export default function LandingLayout({
	children,
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
