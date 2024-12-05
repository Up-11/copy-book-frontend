import { routes } from '@/shared/config/routes'
import { UiLink } from '@/shared/ui/custom/ui-link'
import { Container } from '@/shared/ui/view/container'
import { Title } from '@/shared/ui/view/title'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Gilda_Display } from 'next/font/google'
import { cn } from '@/shared/lib/css'

const glida = Gilda_Display({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-glida',
})

export const LandingFooter = ({}) => {
	return (
		<footer className='bg-indigo-600 text-indigo-50 bg-image py-8'>
			<div>
				<Container className='grid grid-cols-1 justify-start items-start sm:grid-cols-[auto_auto_1fr] md:lg:grid-cols-[auto_auto_1fr] lg:grid-cols-[auto_auto_1fr] gap-3 p-layout'>
					<div className='w-[45px] '>
						<Image
							src={'/assets/images/vector/logo-tr.svg'}
							alt='logo-transparent'
							width={400}
							height={400}
							loading='lazy'
						/>
					</div>
					<div>
						<Title className='text-indigo-100 text-bold' size='small'>
							Важное
						</Title>
						<ul>
							<li>
								<UiLink href={routes.home} color='indigo'>
									Перейти в учебник
								</UiLink>
							</li>
							<li>
								<UiLink href={routes.home} color='indigo'>
									О компании
								</UiLink>
							</li>
							<li>
								<UiLink href={routes.home} color='indigo'>
									О перcональных данных
								</UiLink>
							</li>
							<li>
								<UiLink href={routes.home} color='indigo'>
									Руководство пользователя
								</UiLink>
							</li>
							<li>
								<UiLink href={routes.home} color='indigo'>
									Для учителей
								</UiLink>
							</li>
							<li>
								<UiLink href={routes.home} color='indigo'>
									Для студентов
								</UiLink>
							</li>
						</ul>
					</div>
				</Container>
			</div>
			<div className='flex justify-end mr-8'>
				<Link href={routes.home}>
					<Title
						style={glida.style}
						className={cn(
							'text-indigo-100 hover:text-indigo-200 font-extralight '
						)}
					>
						MorrisHub{' '}
					</Title>
				</Link>
			</div>
		</footer>
	)
}
