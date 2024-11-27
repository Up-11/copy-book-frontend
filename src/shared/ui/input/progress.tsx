'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/shared/lib/css'

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value = 0, max = 100, ...props }, ref) => {
	// Calculate progress as a percentage of max
	const progress = (value / max) * 100

	return (
		<ProgressPrimitive.Root
			ref={ref}
			className={cn(
				'relative h-2 w-full overflow-hidden rounded-full bg-primary/20',
				className
			)}
			{...props}
		>
			<ProgressPrimitive.Indicator
				className='h-full w-full flex-1 bg-primary transition-all'
				style={{ transform: `translateX(-${100 - progress}%)` }}
			/>
		</ProgressPrimitive.Root>
	)
})

Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
