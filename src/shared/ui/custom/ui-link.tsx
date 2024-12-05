import { cn } from '@/shared/lib/css'
import Link, { LinkProps } from 'next/link'
import React from 'react'

interface Props extends LinkProps {
	className?: string
	children: React.ReactNode
	color?: 'indigo' | 'black'
}

export const UiLink: React.FC<Props> = ({
	className,
	color,
	children,
	...props
}) => {
	return (
		<Link
			{...props}
			className={cn(
				className,
				'transition-colors text-sm',
				color === 'indigo'
					? 'text-indigo-50 hover:text-indigo-200'
					: 'text-primary'
			)}
		>
			{children}
		</Link>
	)
}
