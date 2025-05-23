import { Loader } from '../view/loader'
import { cn } from '@/shared/lib/css'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
	'inline-flex  items-center justify-center gap-2 whitespace-nowrap  rounded-lg text-sm  font-medium transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground shadow hover:bg-primary/90 active:bg-primary/80 ',
				destructive:
					'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/70 ',
				outline:
					'border border-primary bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground ',
				secondary:
					'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 ',
				ghost: 'hover:bg-accent cursor-pointer hover:text-accent-foreground',
				link: 'text-primary underline-offset-4  	 hover:text-secondary',
				primary:
					'bg-indigo-500 text-primary-foreground shadow hover:bg-indigo-500/90 '
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-12 rounded-xl  px-20',
				icon: 'h-9 w-9  '
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
	loading?: boolean
	isModalTrigger?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			loading,
			disabled,
			children,
			asChild = false,
			isModalTrigger = false,
			...props
		},
		ref?
	) => {
		const Comp = asChild ? Slot : 'button'

		const IsModalTriggerComponent = () => {
			return (
				<div className={cn(buttonVariants({ variant, size, className }))}>
					{!loading ? children : <Loader className='h-4 w-4 ' />}
				</div>
			)
		}
		return isModalTrigger ? (
			<IsModalTriggerComponent />
		) : (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
				disabled={loading || disabled}
			>
				{' '}
				{!loading ? children : <Loader className='h-4 w-4 ' />}
			</Comp>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
