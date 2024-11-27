import React from 'react'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './sheet'

interface Props {
	className?: string
	children: React.ReactNode
	title: string
	description?: string
	content: React.ReactNode
}

export const Drawer: React.FC<Props> = ({
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
