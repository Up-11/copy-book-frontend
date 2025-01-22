import Providers from './providers/providers'
import './styles/globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
	title: {
		default: 'Copybook',
		template: '%s | Copybook'
	}
}

const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter'
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={` ${inter.variable}  `}
				style={{ marginRight: '0px !important container' }}
			>
				{/* 	<div className='fixed left-0 top-0 z-[999] text-xs opacity-50'>
					DEVELOPMENT.NON_COMMERCE.FOR_KKRIT
				</div> */}
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
