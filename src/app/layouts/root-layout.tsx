import '../styles/globals.scss'
import { Inter } from 'next/font/google'
import Providers from '../providers/providers'

const inter = Inter({
	variable: '--font-inter',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={` ${inter.variable} antialiased `}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
