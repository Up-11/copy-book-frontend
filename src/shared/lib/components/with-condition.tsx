import { cn } from '../css'
import { PropsWithClassName } from '@/shared/types/props.types'
import { Loader } from '@/shared/ui/view/loader'
import React from 'react'

export const WithCondition: React.FC<
	PropsWithClassName & {
		condition: boolean
		render: React.ReactNode
		fallback?: React.ReactNode
		isLoading?: boolean
	}
> = ({
	condition = false,
	render,
	fallback = null,
	isLoading = false,
	className
}) => {
	if (isLoading) {
		return (
			<div className={cn(className)}>
				<Loader />
			</div>
		)
	}

	if (!condition) {
		return fallback ? <div className={cn(className)}>{fallback}</div> : null
	}

	return <div className={cn(className)}>{condition && render}</div>
}
