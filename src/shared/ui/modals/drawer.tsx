import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from './sheet'
import { ModalProps } from '@/shared/types/props.types'
import React from 'react'

export const Drawer: React.FC<Omit<ModalProps, 'footer'>> = ({
	className,
	children,
	title,
	description,
	content
}) => {
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
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
