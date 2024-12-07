import { routes } from '@/shared/config/routes'
import { UiLink } from '@/shared/ui/custom/ui-link'
import { Container } from '@/shared/ui/view/container'
import { Title } from '@/shared/ui/view/title'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Imperial_Script } from 'next/font/google'
import { cn } from '@/shared/lib/css'
import Text from '@/shared/ui/view/text'
import { Button } from '@/shared/ui/other/button'
import './footer.style.scss'
import { VkIcon } from '@/shared/ui/icons/vk'
import { UiIcon } from '@/shared/ui/custom/ui-icon'
import { TelegramIcon } from '@/shared/ui/icons/telegram'
import { YoutubeIcon } from '@/shared/ui/icons/youtube'
import { AtomIcon } from '@/shared/ui/icons/atom'
import { ChooseRoleModal } from '@/widgets/modals'
import { ScrollToTopButton } from '@/entities/scroll-to-top'

const imperial = Imperial_Script({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-imperial',
})

export const LandingFooter = ({}) => {
	return (
		<>
			<ScrollToTopButton />
			<footer className='bg-indigo-600 text-indigo-50 bg-image py-8 relative'>
				<div className='flex justify-center  mb-10'>
					<div className='text-indigo-50 flex flex-col justify-center gap-3 '>
						<div>
							<Text className='text-indigo-50 text-center font-bold'>
								Приступайте к обучению
							</Text>
							<Text className='italic text-center text-indigo-50 font-bold'>
								Прямо сейчас
							</Text>
						</div>
						<ChooseRoleModal>
							<Button
								isModalTrigger
								variant={'destructive'}
								className='self-center text-indigo-500 font-bold'
							>
								Перейти в тетрадь
							</Button>
						</ChooseRoleModal>
					</div>
				</div>
				<div className='footer-wave'></div>
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
						<div className='mr-2'>
							<Title className='text-indigo-100 font-bold mb-2' size='small'>
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
						<div className=' h-full flex flex-col  '>
							<Title className='text-indigo-100 font-bold mb-2' size='small'>
								Свяжитесь с нами
							</Title>
							<ul className='mb-2'>
								<li>
									<UiLink
										href={'mailto:MorrisCopybook@yandex.ru'}
										color='indigo'
									>
										Morris-Copybook@yandex.ru
									</UiLink>
								</li>
							</ul>
							<div className='flex gap-2  items-end h-full '>
								<UiIcon hasTooltip title='Мы во Вконтакте'>
									<VkIcon />
								</UiIcon>
								<UiIcon hasTooltip title='Мы в Телеграм'>
									<TelegramIcon />
								</UiIcon>
								<UiIcon hasTooltip title='Мы в Ютубе '>
									<YoutubeIcon />
								</UiIcon>
								<UiIcon hasTooltip title='Мы в Атом'>
									<AtomIcon />
								</UiIcon>
							</div>
						</div>
					</Container>
				</div>
				<div className='flex justify-end mr-8 mt-8'>
					<Link href={routes.home}>
						<Title
							size='large'
							style={imperial.style}
							className={cn(
								'text-indigo-100 hover:text-indigo-200 font-extralight  '
							)}
						>
							MorrisHub
						</Title>
					</Link>
				</div>
			</footer>
		</>
	)
}
