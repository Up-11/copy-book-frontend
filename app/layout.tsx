import RootLayout from '@/app/layouts/root-layout'

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <RootLayout>{children}</RootLayout>
}
