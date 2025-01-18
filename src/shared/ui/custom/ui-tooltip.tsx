import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '../view/tooltip'
import { cn } from '@/shared/lib/css'
import React from 'react'

export const UiTooltip: React.FC<{
	children: React.ReactNode
	content: string
	className?: string
	delay?: number
	hoverobleDisabled?: boolean
	side?: 'top' | 'right' | 'bottom' | 'left'
}> = ({
	children,
	content,
	className,
	delay = 200,
	hoverobleDisabled = false,
	side
}) => {
	return (
		<TooltipProvider>
			<Tooltip
				delayDuration={delay}
				disableHoverableContent={hoverobleDisabled}
			>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent className={cn(className, 'cursor-default')} side={side}>
					<p>{content}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
