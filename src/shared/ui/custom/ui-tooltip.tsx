import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '../view/tooltip'
import React from 'react'

export const UiTooltip: React.FC<{
	children: React.ReactNode
	content: string
	className?: string
	delay?: number
}> = ({ children, content, className, delay = 200 }) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={delay}>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent className={className}>
					<p>{content}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
