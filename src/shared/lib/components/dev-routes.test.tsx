'use client'

import { getAllValues } from '../utils'
import { routes } from '@/shared/config/routes'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import { Button } from '@/shared/ui/other/button'
import { ScrollArea } from '@/shared/ui/other/scroll-area'
import { Badge } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export const DevRoutesPanel = () => {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	const allRoutes = getAllValues(routes)

	if (process.env.NODE_ENV !== 'development') {
		return null
	}

	return (
		<div className='fixed bottom-14 right-5 z-50'>
			<Popover open={isOpen} onOpenChange={setIsOpen}>
				<PopoverTrigger asChild>
					<Button
						variant='default'
						size='icon'
						className='h-12 w-12 rounded-full bg-neutral-950 shadow-lg hover:bg-neutral-800'
					>
						<svg
							width='20'
							height='20'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='text-white'
						>
							<rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
							<line x1='3' y1='9' x2='21' y2='9' />
							<line x1='3' y1='15' x2='21' y2='15' />
						</svg>
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-80 p-0' align='end' side='top'>
					<div className='flex items-center justify-between border-b p-4'>
						<h3 className='text-sm font-semibold'>Dev Routes</h3>
						<Badge className='text-xs'>{allRoutes.length}</Badge>
					</div>
					<ScrollArea className='h-96'>
						<div className='p-2'>
							{allRoutes.map(route => (
								<Link key={route} href={route} onClick={() => setIsOpen(false)}>
									<div
										className={`flex items-center rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
											pathname === route
												? 'bg-accent font-medium text-accent-foreground'
												: 'text-muted-foreground'
										} `}
									>
										<span className='truncate'>{route}</span>
									</div>
								</Link>
							))}
						</div>
					</ScrollArea>
				</PopoverContent>
			</Popover>
		</div>
	)
}
