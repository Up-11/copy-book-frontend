import { Checkbox } from '../input/checkbox'
import React from 'react'

interface ICheckBoxProps {
	text: string
	value: string
	onCheckedChange?: (checked: boolean) => void
	checked?: boolean
	name?: string
}

export const UiCheckbox: React.FC<ICheckBoxProps> = ({
	checked,
	value,
	text,
	name,
	onCheckedChange
}) => {
	return (
		<div className='inline-flex items-center select-none py-1 '>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className='rounded-[5px] w-4 h-4 '
				id={`checkbox-${String(name)}-${String(value)}`}
			/>
			<label
				htmlFor={`checkbox-${String(name)}-${String(value)}`}
				className='leading-5 cursor-pointer pl-1.5 max-w-40 items-center break-words !line-clamp-1  inline-flex text-sm'
			>
				{text}
			</label>
		</div>
	)
}
