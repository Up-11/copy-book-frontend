import React from 'react'
import { useFormContext, RegisterOptions } from 'react-hook-form'
import { ClearButton } from './clear-button'
import { ErrorText } from './error-text'
import { Input } from '../input/input'
import { cn } from '@/shared/lib/css'
import { RequierdSymbol } from './requierd-symbol'
import Text from '../view/text'
import { ShowPasswordButton } from './show-password-buttton'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string
	name: string
	label?: string
	required?: boolean
	rules?: RegisterOptions
}

export const FormInput: React.FC<FormInputProps> = ({
	className,
	type,
	name,
	label,
	required,
	rules,
	...props
}) => {
	const {
		register,
		formState: { errors },
		watch,
		setValue,
	} = useFormContext()

	const [isShown, setIsShown] = React.useState(false)

	const value = watch(name)
	const errorText = errors[name]?.message as string

	const onClickClear = () => {
		setValue(name, '', { shouldValidate: true, shouldDirty: true })
	}

	const HandlePassword = () => {
		setIsShown(prev => !prev)
	}

	return (
		<div className='flex flex-col items-start gap-2 w-full'>
			{label && (
				<Text
					size='small'
					className='font-medium text-gray-700 dark:text-gray-300'
				>
					{label} {required && <RequierdSymbol />}
				</Text>
			)}
			<div className='relative w-full'>
				<Input
					{...props}
					{...register(name, rules)}
					type={type === 'password' ? (isShown ? 'text' : 'password') : type}
					className={cn(
						className,
						'placeholder:text-gray-500 text-sm px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
					)}
				/>
				{type === 'password' && value && (
					<ShowPasswordButton onClick={HandlePassword} isShown={isShown} />
				)}
				{value && <ClearButton onClick={onClickClear} />}
			</div>
			{errorText && (
				<ErrorText text={errorText} className='text-sm text-red-600 mt-1' />
			)}
		</div>
	)
}
