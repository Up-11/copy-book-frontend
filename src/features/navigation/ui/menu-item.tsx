import { MenuItemType } from '../nav-menu.types'
import { cn } from '@/shared/lib/css'
import { NavigationMenuLink } from '@/shared/ui/modals/navigation-menu'
import { Link } from 'lucide-react'

export const TallMenuItem: React.FC<MenuItemType> = ({
	href,
	title,
	description,
	icon
}) => (
	<li className='row-span-3'>
		<NavigationMenuLink asChild>
			<Link
				className={cn(
					'flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
				)}
				href={href}
			>
				{icon}
				<div className='mb-2 mt-4 text-lg font-medium'>{title}</div>
				<p className='text-sm leading-tight text-muted-foreground'>
					{description}
				</p>
			</Link>
		</NavigationMenuLink>
	</li>
)

export const MenuItem: React.FC<MenuItemType> = ({
	href,
	title,
	description
}) => (
	<li>
		<NavigationMenuLink asChild>
			<Link
				className={cn(
					'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
				)}
				href={href}
			>
				<div className='text-sm font-medium leading-none'>{title}</div>
				<p className='line-clamp-1 text-sm leading-snug text-muted-foreground '>
					{description}
				</p>
			</Link>
		</NavigationMenuLink>
	</li>
)
