import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '../modals/dropdown-menu'
import React from 'react'

interface Props {
	children: React.ReactNode
	label?: string
	className?: string
	items: React.ReactNode
}

export const UiDropdownMenu: React.FC<Props> = ({
	className,
	children,
	label,
	items
}) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>{children}</DropdownMenuTrigger>
			<DropdownMenuContent className={className}>
				{label && (
					<>
						<DropdownMenuLabel>{label}</DropdownMenuLabel>{' '}
						<DropdownMenuSeparator className='bg-zinc-600' />
					</>
				)}
				{items}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
