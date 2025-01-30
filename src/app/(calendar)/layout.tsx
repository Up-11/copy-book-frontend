import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Календарь'
}
export default function StudentTaskLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <>{children}</>
}
