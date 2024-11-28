import LandingLayout from '@/app/layouts/landing-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Copybook',
	description: 'New era education serivce',
}

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <LandingLayout>{children}</LandingLayout>
}
