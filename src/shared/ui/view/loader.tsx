import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import { Loader2 } from 'lucide-react'
import React from 'react'

export const Loader = <T extends PropsWithClassName & { size?: number }>({
	className,
	size
}: T) => {
	return (
		<div>
			<Loader2 size={size} className={cn(className, 'animate-spin')} />
		</div>
	)
}
