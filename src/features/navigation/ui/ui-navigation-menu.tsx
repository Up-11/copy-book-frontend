'use client'

import { menuDataStudent } from '../menu.data'
import { MenuItemsProps, MenuItemType } from '../nav-menu.types'
import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger
} from '@/shared/ui/modals/navigation-menu'
import { BookKey, Code2, LayoutList } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

//TODO Сделать меню и под учителя и под ученика

export const UiNavigationMenu: React.FC = () => {
	const renderMenuItems = ({
		items,
		icon,
		title,
		tallItemHref,
		description
	}: MenuItemsProps) => {
		return (
			<>
				<TallMenuItem
					href={tallItemHref}
					title={title}
					description={description}
					icon={icon}
				/>
				{items.map((item, index) => (
					<MenuItem
						key={index}
						href={item.href}
						title={item.title}
						description={item.description}
					/>
				))}
			</>
		)
	}

	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Задания</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
							{renderMenuItems({
								items: menuDataStudent[0].items,
								icon: <LayoutList />,
								title: 'Ваши задания',
								tallItemHref: routes.dashboard.student,
								description: 'Посмотрите список ваших заданий'
							})}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>Песочница</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
							{renderMenuItems({
								items: menuDataStudent[1].items,
								icon: <Code2 />,
								title: 'Песочница',
								tallItemHref: routes.code.sandbox,
								description:
									'Потренеруйтесь в самостоятельном написании кода в песочнице'
							})}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>Курсы</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
							{renderMenuItems({
								items: menuDataStudent[2].items,
								icon: <BookKey />,
								title: 'Ваши курсы',
								tallItemHref: routes.home,
								description: 'Посмотрите список курсов которые вы проходите'
							})}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const TallMenuItem: React.FC<MenuItemType> = ({
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

const MenuItem: React.FC<MenuItemType> = ({ href, title, description }) => (
	<li>
		<NavigationMenuLink asChild>
			<Link
				className={cn(
					'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
				)}
				href={href}
			>
				<div className='text-sm font-medium leading-none'>{title}</div>
				<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
					{description}
				</p>
			</Link>
		</NavigationMenuLink>
	</li>
)
