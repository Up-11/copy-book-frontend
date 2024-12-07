import '../styles/globals.scss'
import { Inter } from 'next/font/google'
import Providers from '../providers/providers'

const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={` ${inter.variable} `}
				style={{ marginRight: '0px !important' }}
			>
				{' '}
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
