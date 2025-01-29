import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from './dialog'
import { ModalProps } from '@/shared/types/props.types'
import React from 'react'

export const Modal: React.FC<ModalProps> = ({
	children,
	description,
	title,
	footer,
	content,
	className
}) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
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
