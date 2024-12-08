import React from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'

export const Loader: React.FC<PropsWithClassName> = ({ className }) => {
	return (
		<div>
			<Loader2 className={cn(className, 'animate-spin')} />
		</div>
	)
}
