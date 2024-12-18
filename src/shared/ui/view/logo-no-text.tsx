import Link from 'next/link'
import React from 'react'
import { routes } from '@/shared/config/routes'
import Image from 'next/image'
import { cn } from '@/shared/lib/css'

export const LogoNoText: React.FC<{
	hasLink?: boolean
	href?: string
	className?: string
}> = ({ hasLink = true, href = routes.home, className }) => {
	return hasLink ? (
		<Link
			href={href}
			className={cn('flex animate-smoothIn items-center gap-1', className)}
		>
			<Image src='/assets/images/logo.svg' width={40} height={40} alt='logo' />
		</Link>
	) : (
		<div className={cn('flex animate-smoothIn items-center gap-1', className)}>
			<Image src='/assets/images/logo.svg' width={40} height={40} alt='logo' />
		</div>
	)
}
