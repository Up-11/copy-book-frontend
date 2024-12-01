import { cn } from '@/shared/lib/css'
import React from 'react'

interface Props {
	className?: string
	children: React.ReactNode
}

export const Container: React.FC<Props> = ({ className, children }) => {
	return <div className={cn(className, ' page-w ')}>{children}</div>
}
