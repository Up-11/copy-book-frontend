import './footer.style.css'
import { ImperialLink } from './imperial-link'
import { ScrollToTopButton } from '@/entities/scroll-to-top'
import { routes } from '@/shared/config/routes'
import { UiIcon } from '@/shared/ui/custom/ui-icon'
import { UiLink } from '@/shared/ui/custom/ui-link'
import { AtomIcon } from '@/shared/ui/icons/atom'
import { TelegramIcon } from '@/shared/ui/icons/telegram'
import { VkIcon } from '@/shared/ui/icons/vk'
import { YoutubeIcon } from '@/shared/ui/icons/youtube'
import { Button } from '@/shared/ui/other/button'
import { Container } from '@/shared/ui/view/container'
import Text from '@/shared/ui/view/text'
import { Title } from '@/shared/ui/view/title'
import { ChooseRoleModal } from '@/widgets/modals'
import Image from 'next/image'
import React from 'react'

export const LandingFooter = ({}) => {
	return (
		<>
			<ScrollToTopButton />
			<footer className='bg-image relative bg-indigo-600 py-8 text-indigo-50'>
				<div className='mb-10 flex justify-center'>
					<div className='flex flex-col justify-center gap-3 text-indigo-50'>
						<div>
							<Text className='text-center font-bold text-indigo-50'>
								Приступайте к обучению
							</Text>
							<Text className='text-center font-bold italic text-indigo-50'>
								Прямо сейчас
							</Text>
						</div>
						<ChooseRoleModal>
							<Button
								isModalTrigger
								variant={'destructive'}
								className='self-center font-bold text-indigo-500'
							>
								Перейти в тетрадь
							</Button>
						</ChooseRoleModal>
					</div>
				</div>
				<div className='footer-wave'></div>
				<div>
					<Container className='grid grid-cols-1 items-start justify-start gap-3 p-layout sm:grid-cols-[auto_auto_1fr] md:lg:grid-cols-[auto_auto_1fr] lg:grid-cols-[auto_auto_1fr]'>
						<div className='w-[45px]'>
							<Image
								src={'/assets/images/vector/logo-tr.svg'}
								alt='logo-transparent'
								width={400}
								height={400}
								loading='lazy'
							/>
						</div>
						<div className='mr-2'>
							<Title className='mb-2 font-bold text-indigo-100' size='small'>
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
						<div className='flex h-full flex-col'>
							<Title className='mb-2 font-bold text-indigo-100' size='small'>
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
							<div className='flex h-full items-end gap-2'>
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
				<div className='mr-8 mt-8 flex justify-end'>
					<ImperialLink />
				</div>
			</footer>
		</>
	)
}
