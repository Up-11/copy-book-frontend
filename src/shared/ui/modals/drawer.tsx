import React from 'react'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './sheet'
import { ModalProps } from '@/shared/types/props.types'

export const Drawer: React.FC<Omit<ModalProps, 'footer'>> = ({
	className,
	children,
	title,
	description,
	content,
}) => {
	return (
		<Sheet>
			<SheetTrigger>{children}</SheetTrigger>
			<SheetContent className={className}>
				<SheetHeader>
					<SheetTitle>{title}</SheetTitle>
					<SheetDescription>{description}</SheetDescription>
				</SheetHeader>
				{content}
			</SheetContent>
		</Sheet>
	)
}
