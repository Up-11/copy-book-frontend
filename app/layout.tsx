import RootLayout from '@/app/layouts/root-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		default: 'Copybook',
		template: '%s | Copybook',
	},
}

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <RootLayout>{children}</RootLayout>
}
