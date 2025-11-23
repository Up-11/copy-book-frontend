import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from './dialog'
import { cn } from '@/shared/lib/css'
import { ModalProps } from '@/shared/types/props.types'
import React from 'react'

export const Modal: React.FC<ModalProps> = ({
	children,
	description,
	title,
	footer,
	content,
	className,
	open,
	onOpenChange
}) => {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className={cn(className, 'z-[1100]')}>
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
