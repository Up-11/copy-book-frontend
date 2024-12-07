import React from 'react'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './dialog'

interface Props {
	children: React.ReactNode
	title?: string
	description?: string
	footer?: React.ReactNode
	content: React.ReactNode
	className?: string
}

export const Modal: React.FC<Props> = ({
	children,
	description,
	title,
	footer,
	content,
	className,
}) => {
	return (
		<Dialog>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent className={className}>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				{content}
				<DialogFooter>{footer}</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
