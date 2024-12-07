import { cn } from '@/shared/lib/css'
import React from 'react'
import { UiTooltip } from './ui-tooltip'

interface Props {
	className?: string
	children: React.ReactNode
	hasTooltip?: boolean
	title?: string
}

export const UiIcon: React.FC<Props> = ({
	className,
	children,
	hasTooltip,
	title,
}) => {
	const withTooltip = () => {
		return (
			<UiTooltip content={title || 'icon'}>
				<div
					className={cn(
						className,
						'hover:text-indigo-200 cursor-pointer h-6 w-6 '
					)}
				>
					{children}
				</div>
			</UiTooltip>
		)
	}
	const withoutTooltip = () => {
		return (
			<div
				className={cn(
					className,
					'hover:text-indigo-200 cursor-pointer h-6 w-6 '
				)}
			>
				{children}
			</div>
		)
	}
	return hasTooltip ? withTooltip() : withoutTooltip()
}
