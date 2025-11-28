import { Badge } from '../badge'
import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'

export const NotificationDot: React.FC<PropsWithClassName> = ({
	className
}) => {
	return <div className={cn('size-2 rounded-full bg-indigo-500', className)} />
}
