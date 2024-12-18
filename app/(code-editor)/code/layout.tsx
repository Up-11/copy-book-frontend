import SandboxLayout from '@/app/layouts/sandbox-layout'

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <SandboxLayout>{children}</SandboxLayout>
}
