import React from 'react'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectTrigger,
} from './select'

interface Props {
	children: React.ReactNode
	label: string
	content: React.ReactNode
}

export const UiSelect: React.FC<Props> = ({ children, label, content }) => {
	return (
		<Select>
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
