import { cn } from '@/shared/lib/css'
import { cva } from 'class-variance-authority'
import { Gentium_Book_Plus } from 'next/font/google'
import React, { CSSProperties } from 'react'

const gentium = Gentium_Book_Plus({
	weight: '700',
	subsets: ['latin'],
	variable: '--font-gentium'
})

const titleVariants = cva('font-medium', {
	variants: {
		size: {
			small: 'text-[14px] sm:text-[16px]',
			medium: 'text-base sm:text-lg md:text-xl',
			large: 'text-xl sm:text-2xl md:text-3xl',
			extraLarge: 'text-2xl sm:text-3xl md:text-[40px] lg:text-[46px]',
			giant: 'text-4xl sm:text-5xl md:text-6xl lg:text-[68px]'
		},
		color: {
			black: 'text-primary',
			indigo: 'text-indigo-600',
			white: 'text-white'
		}
	},
	defaultVariants: {
		size: 'medium',
		color: 'black'
	}
})

interface TitleProps {
	size?: 'small' | 'medium' | 'large' | 'extraLarge' | 'giant'
	color?: 'black' | 'indigo' | 'white'
	children: React.ReactNode
	className?: string
	gentiumFont?: boolean
	style?: CSSProperties
}

export function Title({
	size = 'medium',
	color,
	children,
	className,
	style,
	gentiumFont = false,
	...props
}: TitleProps) {
	return (
		<h1
			{...props}
			style={gentiumFont ? gentium.style : style}
			className={cn(titleVariants({ size, color, className }))}
		>
			{children}
		</h1>
	)
}

export default Title
