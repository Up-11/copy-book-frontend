import {
	Select,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectTrigger
} from '../input/select'
import React from 'react'

interface Props {
	children: React.ReactNode
	label: string
	content: React.ReactNode
	defaultValue: string
	props?: React.ComponentProps<typeof Select>
}

export const UiSelect: React.FC<Props> = ({
	children,
	label,
	content,
	defaultValue,
	...props
}) => {
	return (
		<Select {...props} defaultValue={defaultValue}>
			<SelectTrigger className='w-[180px]'>{children}</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>{label}</SelectLabel>
					{content}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
