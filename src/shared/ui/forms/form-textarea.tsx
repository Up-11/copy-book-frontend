import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ClearButton } from './clear-button'
import { ErrorText } from './error-text'
import { RequierdSymbol } from './requierd-symbol'
import { Textarea } from '../input/textarea'

interface FormTextareaProps {
	className?: string
	name: string
	label?: string
	rows?: number
	required?: boolean
	id: string
	placeholder?: string
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
	className,
	name,
	label,
	rows,
	placeholder,
	required = false,
	id,
	...props
}) => {
	const {
		register,
		formState: { errors },
		watch,
		setValue,
	} = useFormContext()

	const value = watch(name)
	const errorText = errors[name]?.message as string | undefined

	const onClickClear = () => {
		setValue(name, '')
	}

	return (
		<div className={className}>
			{label && (
				<p className='font-medium mb-2'>
					{label} {required && <RequierdSymbol />}
				</p>
			)}
			<div className='relative'>
				<Textarea
					placeholder={placeholder}
					id={id}
					{...props}
					{...register(name)}
					rows={rows}
					className=' text-md resize-none placeholder:text-gray-500'
				/>
				{value && <ClearButton onClick={onClickClear} />}
			</div>
			{errorText && <ErrorText text={errorText} className='mt-2' />}
		</div>
	)
}
