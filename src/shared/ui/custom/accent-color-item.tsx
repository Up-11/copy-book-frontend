import Text from '../view/text'
import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import React from 'react'

export const AccentColorText: React.FC<
	PropsWithClassName & { children: React.ReactNode }
> = ({ className, children }) => {
	return (
		<Text
			className={cn('bg-indigo-200  rounded-lg p-2 inline-flex ', className)}
		>
			{children}
		</Text>
	)
}

export const AccentColorBlock: React.FC<
	PropsWithClassName & { children: React.ReactNode }
> = ({ className, children }) => {
	return (
		<div
			className={cn('bg-indigo-200  rounded-lg p-2 inline-flex ', className)}
		>
			{children}
		</div>
	)
}
