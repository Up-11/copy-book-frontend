import React from 'react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../view/tooltip'

export const UiTooltip: React.FC<{
	children: React.ReactNode
	content: string
	className?: string
}> = ({ children, content, className }) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={200}>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent className={className}>
					<p>{content}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
