import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import Title from '@/shared/ui/view/title'
import { Imperial_Script } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const imperial = Imperial_Script({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-imperial'
})

export const ImperialLink: React.FC<PropsWithClassName> = ({ className }) => {
	return (
		<Link href={routes.home}>
			<Title
				size='large'
				style={imperial.style}
				className={cn(
					'font-extralight text-indigo-100 hover:text-indigo-200',
					className
				)}
			>
				MorrisHub
			</Title>
		</Link>
	)
}
