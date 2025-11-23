'use client'

import { useHeader } from '../model/use-header'
import './header.styles.css'
import { LoginButtonSlot } from './login-button-slot'
import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { Drawer } from '@/shared/ui/modals/drawer'
import { Button } from '@/shared/ui/other/button'
import { LogoWithText } from '@/shared/ui/view/logo-with-text'
import { Separator } from '@/shared/ui/view/separator'
import { ChooseRoleModal } from '@/widgets/modals'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const LandingHeader: React.FC = ({}) => {
	const { isScrolled } = useHeader()

	return (
		<header
			className={cn(
				'page-w fixed inset-x-0 top-0 z-50 flex h-header justify-between p-layout sm:px-10'
			)}
		>
			<div
				className={cn(
					'absolute inset-0 top-0 flex h-header w-full',
					isScrolled ? 'header' : 'header header--hidden'
				)}
			></div>
			<div className='flex items-center gap-5'>
				<LogoWithText />
				<nav className='text-white max-md:hidden'>
					<Link href={routes.home}>
						<Button variant={'link'} className='text-white'>
							О нас
						</Button>
					</Link>
					<Link href={routes.code.sandbox}>
						<Button variant={'link'} className='text-white'>
							Протестировать редактор кода
						</Button>
					</Link>
				</nav>
			</div>

			<div className='flex items-center'>
				<LoginButtonSlot />
				<Drawer
					content={
						<div className='flex h-full flex-col justify-between'>
							<nav className='flex flex-col gap-3'>
								<Link href={routes.home}>
									<Button
										variant={'link'}
										className='flex justify-start hover:text-indigo-500'
									>
										О нас
									</Button>
								</Link>
								<Link href={routes.home}>
									<Button
										variant={'link'}
										className='flex justify-start hover:text-indigo-500'
									>
										Редактор кода
									</Button>
								</Link>
							</nav>

							<div className='flex flex-col gap-3'>
								<Separator />
								<ChooseRoleModal>
									<Button
										variant={'secondary'}
										isModalTrigger
										className='w-full'
									>
										Открыть тетрадь
									</Button>
								</ChooseRoleModal>
							</div>
						</div>
					}
				>
					<div>
						<Menu size={30} className='text-indigo-50 md:hidden' />
					</div>
				</Drawer>
			</div>
		</header>
	)
}
