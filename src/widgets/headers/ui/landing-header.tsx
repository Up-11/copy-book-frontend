'use client'
import { cn } from '@/shared/lib/css'
import { Button } from '@/shared/ui/other/button'
import Title from '@/shared/ui/view/title'
import Image from 'next/image'
import React from 'react'
import { useHeader } from '../model/use-header'
import { Menu } from 'lucide-react'
import { Drawer } from '@/shared/ui/modals/drawer'
import { Separator } from '@/shared/ui/view/separator'

export const LandingHeader: React.FC = ({}) => {
	const { isScrolled } = useHeader()

	return (
		<header
			className={cn(
				'flex p-layout h-header px-10 fixed  justify-between inset-x-0 top-0  '
			)}
		>
			<div
				className={cn(
					' w-full flex  h-header absolute top-0 inset-0',
					isScrolled ? '  header' : 'header header--hidden '
				)}
			></div>
			<div className='flex items-center gap-5 '>
				<div className='flex items-center gap-1'>
					<Image
						src='/assets/images/logo.svg'
						width={45}
						height={45}
						alt='logo'
					/>
					<Title size='large' gentiumFont className='uppercase text-indigo-50'>
						copybook
					</Title>
				</div>
				<nav className='text-white max-md:hidden'>
					<Button variant={'link'} className='text-white  '>
						О нас
					</Button>
					<Button variant={'link'} className='text-white '>
						Протестировать редактор кода
					</Button>
				</nav>
			</div>

			<div className='flex items-center '>
				<Button variant={'secondary'} className='max-md:hidden'>
					Открыть тетрадь
				</Button>
				<Drawer
					content={
						<div className='h-full flex flex-col justify-between'>
							<nav className=' flex flex-col gap-3 '>
								<Button
									variant={'link'}
									className='flex justify-start hover:text-indigo-500 '
								>
									О нас
								</Button>
								<Button
									variant={'link'}
									className='flex justify-start hover:text-indigo-500'
								>
									Протестировать редактор кода
								</Button>
							</nav>

							<div className='flex flex-col gap-3'>
								<Separator />
								<Button variant={'secondary'}>Открыть тетрадь</Button>
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
