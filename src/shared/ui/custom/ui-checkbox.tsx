import { Checkbox } from '../input/checkbox'
import React from 'react'

interface ICheckBoxProps {
	text: string
	value: string
	onCheckedChange?: (checked: boolean) => void
	editingTools?: React.ReactNode
	checked?: boolean
	name?: string
}

export const UiCheckbox: React.FC<ICheckBoxProps> = ({
	checked,
	value,
	text,
	name,
	onCheckedChange,
	editingTools
}) => {
	return (
		<div className='inline-flex select-none items-center py-1'>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className='h-4 w-4 rounded-[5px]'
				id={`checkbox-${String(name)}-${String(value)}`}
			/>
			<label
				title={text}
				htmlFor={`checkbox-${String(name)}-${String(value)}`}
				className='!line-clamp-1 inline-flex max-w-44 cursor-pointer items-center break-words pl-1.5 text-sm leading-5'
			>
				{text}
			</label>
			{editingTools}
		</div>
	)
}
