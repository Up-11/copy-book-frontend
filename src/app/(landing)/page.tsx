import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/css'
import { Button } from '@/shared/ui/other/button'
import { Block } from '@/shared/ui/view/block'
import { Container } from '@/shared/ui/view/container'
import { ListElement } from '@/shared/ui/view/list-element'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { WhiteBlock } from '@/widgets/landing'
import { MainButtonSlot } from '@/widgets/landing/ui/main-button-slot'
import { ChooseRoleModal } from '@/widgets/modals'
import { ArrowUpRightIcon, BookOpen, CodeXml, Wrench } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Landing() {
	return (
		<main>
			<section className='bg-image bg-indigo-600 pt-header lg:p-layout'>
				<Container>
					<div className='mt-20 flex justify-center'>
						<Block
							className='grid grid-cols-1 gap-4 lg:grid-cols-2'
							color='white'
							size='extraLarge'
						>
							<div className='flex flex-col gap-10 p-4 max-md:p-5 max-sm:p-2 lg:p-10'>
								<div className='flex flex-col'>
									<Title
										gentiumFont
										size='giant'
										className='gr-text animate-gradient uppercase'
									>
										COPYBOOK
									</Title>
									<Text
										size='extraLarge'
										className='text-4xl font-semibold max-sm:text-xl'
									>
										Делаем образование <br /> доступным каждому!
									</Text>
								</div>
								<div className='max-sm:mx-4'>
									<MainButtonSlot />
								</div>
							</div>
							<div className='col-span-1 animate-smoothIn max-sm:mt-4'>
								<Image
									src={'/assets/images/vector/cubes.svg'}
									width={400}
									height={400}
									alt='image'
									className='h-full w-full rounded-3xl object-cover'
									priority
								/>
							</div>
						</Block>
					</div>
					<div className='my-8'>
						<div className='flex gap-3 pb-4 max-lg:flex-col sm:justify-center lg:flex-row lg:justify-between lg:gap-8'>
							<Block
								className={cn(
									'relative grid grid-cols-12 items-start rounded-3xl p-7'
								)}
							>
								<div className='col-span-2 flex items-center justify-center p-2'>
									<Wrench size={30} />
								</div>

								<div className='col-span-8 flex flex-col gap-3'>
									<Text size='medium'>Удобный инструменатрий для учителей</Text>
								</div>
								<Link
									href={routes.home}
									className='col-span-2 place-self-start self-start justify-self-end'
								>
									<ArrowUpRightIcon size={40} />
								</Link>
							</Block>
							<Block
								className={cn(
									'relative grid grid-cols-12 items-start rounded-3xl p-7'
								)}
							>
								<div className='col-span-2 flex items-center justify-center p-2'>
									<CodeXml size={30} />
								</div>

								<div className='col-span-8 flex flex-col gap-3'>
									<Text size='medium'>Материалы соответствуют ФГОС</Text>
								</div>
								<Link
									href={routes.home}
									className='col-span-2 place-self-start self-start justify-self-end'
								>
									<ArrowUpRightIcon size={40} />
								</Link>
							</Block>
							<Block
								className={cn(
									'relative grid grid-cols-12 items-start rounded-3xl p-7'
								)}
							>
								<div className='col-span-2 flex items-center justify-center p-2'>
									<BookOpen size={30} />
								</div>

								<div className='col-span-8 flex flex-col gap-3'>
									<Text size='medium'>
										Яндекс Учебник используют в 75% школ России
									</Text>
								</div>
							</Block>
						</div>
					</div>
				</Container>
			</section>
			<section>
				<Container>
					<div className='relative grid auto-rows-min grid-rows-2 gap-4 max-lg:grid-cols-1 lg:grid-cols-3'>
						{/* Первый блок */}
						<Link
							href={routes.home}
							className='col-span-2 row-span-1 flex rounded-3xl bg-purple-100 max-lg:col-span-3 max-md:flex-col'
						>
							<div className='flex px-layout pt-layout'>
								<div className='flex flex-col gap-3'>
									<Title className='font-semibold' size='large'>
										Бесплатные курсы по информатике
									</Title>
									<Text size='small'>
										Используйте курсы с 5 по 11 класс — целиком или отдельные
										задания. Интерактивные карточки не дадут ученикам заскучать.
									</Text>
								</div>
								<div className='hidden max-md:block'>
									<ArrowUpRightIcon size={40} className='text-purple-400' />
								</div>
							</div>
							<div className='flex h-full w-full max-w-[350px] items-end justify-end'>
								<Image
									width={500}
									height={500}
									src='/assets/images/vector/notebook.svg'
									alt='Бесплатные курсы по информатике'
									className='h-auto object-cover'
								/>
							</div>
							<div className='px-layout pt-layout max-md:hidden'>
								<ArrowUpRightIcon size={40} className='text-purple-400' />
							</div>
						</Link>

						{/* Второй блок */}
						<Link
							href={routes.home}
							className='col-span-2 row-span-1 row-start-2 flex items-start gap-4 rounded-3xl bg-sky-100 max-lg:col-span-3 max-md:flex-col'
						>
							<div className='flex px-layout pt-layout'>
								<div className='flex flex-col gap-3'>
									<Title className='font-semibold' size='large'>
										Подготовка к ЕГЭ по информатике
									</Title>
									<Text size='small'>
										Задания и пробники любой сложности. На платформе есть
										редактор кода, цифровой маркер и ИИ-помощник, который
										поможет детям найти верный ответ.
									</Text>
								</div>
								<div className='hidden max-md:block'>
									<ArrowUpRightIcon size={40} className='text-sky-400' />
								</div>
							</div>
							<div className='flex w-full items-end justify-end'>
								<Image
									width={300}
									height={300}
									src='/assets/images/vector/hand.svg'
									alt='Подготовка к ЕГЭ'
									className='h-auto max-w-[200px] object-cover'
								/>
							</div>
							<div className='px-layout pt-layout max-md:hidden'>
								<ArrowUpRightIcon size={40} className='text-sky-400' />
							</div>
						</Link>

						{/* Третий блок (справа, вертикально) */}
						<div className='row-span-2 flex flex-col items-start gap-4 rounded-3xl bg-sky-100 max-lg:col-span-3 lg:col-span-1'>
							<div className='flex w-full justify-between px-layout pt-layout'>
								<div className='flex flex-col gap-3'>
									<Title className='font-semibold' size='large'>
										Удобные инструменты для учителей
									</Title>
								</div>
								<div className=''>
									<ArrowUpRightIcon size={40} className='text-sky-400' />
								</div>
							</div>
							<Text className='px-layout' size='small'>
								Сосредоточьтесь на преподавании, а рутину оставьте платформе —
								задания проверяются автоматически, а вся статистика учеников
								появляется в личном кабинете.
							</Text>
							<div className='flex w-full items-end justify-end'>
								<Image
									width={300}
									height={300}
									src='/assets/images/vector/guy.svg'
									alt='Удобные инструменты'
									className='h-auto object-cover'
								/>
							</div>
						</div>
					</div>
				</Container>
			</section>
			<section className='mt-4 rounded-3xl bg-indigo-50 lg:p-layout'>
				<Container className='flex justify-center'>
					<div className='my-4 flex w-full flex-col gap-4 text-center'>
						<Title color='indigo' size='extraLarge'>
							Что можно делать в Copybook
						</Title>
						<Text>
							Copybook — это универсальная онлайн-платформа для улучшения ваших
							навыков в программировании и решения задач.
						</Text>
						<div className='mt-5 flex flex-col justify-center gap-4'>
							<WhiteBlock
								link={routes.home}
								title='Удобные инструменты для учителей'
								list={[
									'Полный комплект готовых материалов для уроков и домашних заданий: презентации, рабочие тетради, практические работы',
									'Яркие интерактивные карточки помогут закрепить теорию и подойдут для учеников с разным уровнем подготовки',
									'Тренажёры по программированию подойдут, чтобы освоить Blockly и Python'
								]}
							/>
							<WhiteBlock
								link={routes.home}
								title='Технологии для комфортной работы учителя'
								list={[
									'Гибкие группы. Объединяйте учеников по классу, возрасту или успеваемости',
									'Статистика в личном кабинете учителя — следите за успеваемостью учеников по группам, классам или отдельным ученикам',
									'Автоматическая проверка домашних заданий — результаты появляются сразу, как только ученик заканчивает решение'
								]}
								reversed
							/>
							<WhiteBlock
								link={routes.home}
								title='Платформа для подготовки к ЕГЭ по информатике'
								list={[
									'Пробники и тематические подборки для любого уровня подготовки. Более 1000 заданий от экспертов',
									'Подборки заданий — подбирайте задания под свою программу и делитесь подборками с коллегами',
									'ИИ-помощник разгрузит учителя — объяснит детям незнакомые термины, предложит теорию и видео, исправит ошибку в коде и поможет найти правильный ответ',
									'Обучающие вебинары для педагогов и разборы заданий для школьников помогут разобраться подготовиться к экзамену'
								]}
							/>
						</div>
					</div>
				</Container>
			</section>
			<section>
				<Container className='mx-auto'>
					<div className='mt-10 flex flex-col justify-center'>
						<div className='flex justify-center'>
							<Title size='extraLarge'>Помогаем развиваться</Title>
						</div>
						<div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
							<div className='col-span-1 flex rounded-3xl bg-sky-100 max-lg:flex-col sm:col-span-2 lg:col-span-3'>
								<div className='flex flex-col gap-3 px-layout pt-layout'>
									<Title className='font-semibold' size='large'>
										Бесплатные курсы по информатике
									</Title>
									<Text size='small'>
										Используйте курсы с 5 по 11 класс — целиком или отдельные
										задания. Интерактивные карточки не дадут ученикам заскучать.
									</Text>
									<Link href={routes.home}>
										<Button variant={'outline'} size={'lg'}>
											Учавствовать
										</Button>
									</Link>
								</div>
								<div className='flex h-full w-full flex-col items-start justify-start'>
									<Image
										width={800}
										height={800}
										src='/assets/images/vector/notebook-2.svg'
										alt='Бесплатные курсы по информатике'
										className='h-auto w-full object-cover'
									/>
								</div>
							</div>

							{/* Повышение квалификации */}
							<div className='col-span-1 flex flex-col gap-2 rounded-3xl bg-sky-100 p-layout'>
								<Title className='font-semibold' size='large'>
									Повышение квалификации
								</Title>
								<Text size='small'>
									Растите как профессионал: проходите диагностику, предметные и
									педагогические курсы, и получайте удостоверения о повышении
									квалификации государственного образца.
								</Text>
							</div>

							{/* Профессиональные конкурсы */}
							<div className='col-span-1 flex flex-col gap-2 rounded-3xl bg-sky-100 p-layout'>
								<Title className='break-words font-semibold' size='large'>
									Профессиональные конкурсы
								</Title>
								<Text size='small'>
									Создавайте авторские уроки и разрабатывайте проекты для
									учителей со всей страны. Опубликуйте свою работу на платформе
									Яндекс Учебника и выиграйте ценные призы.
								</Text>
							</div>

							{/* Призы и награды */}
							<div className='col-span-1 flex flex-col gap-2 rounded-3xl bg-sky-100 p-layout'>
								<Title className='font-semibold' size='large'>
									Призы и награды
								</Title>
								<Text size='small'>
									Участвуйте в программе и получайте награды:
								</Text>
								<ul>
									<ListElement item='Оформление класса информатики в стиле Яндекса' />
									<ListElement item='Стажировку в московском офисе Яндекса' />
									<ListElement item='Мерч с символикой Яндекс Учебника и Кадрового резерва' />
									<ListElement item='Подписки Яндекс 360' />
								</ul>
							</div>
						</div>

						{/* Курсы повышения квалификации и диагностика */}
						<div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2'>
							<div className='col-span-1 flex flex-col rounded-3xl bg-purple-100'>
								<div className='flex flex-col items-start gap-4 p-layout'>
									<Title size='large'>Курсы повышения квалификации</Title>
									<Text size='small'>
										Курсы по нейросетям, программированию и гибким навыкам для
										учителей. Принципы доказательной педагогики и высокие
										технологии Яндекса в курсах для учеников.
									</Text>
									<Button
										variant={'outline'}
										size={'default'}
										className='self-start px-6 py-5'
									>
										Попробовать
									</Button>
								</div>
								<div className='flex flex-col items-end justify-end'>
									<Image
										width={500}
										height={500}
										alt='Курсы повышения квалификации'
										className='h-auto w-[244px]'
										src='/assets/images/vector/instruments.svg'
									/>
								</div>
							</div>

							<div className='col-span-1 flex flex-col rounded-3xl bg-orange-100'>
								<div className='flex flex-col items-start gap-4 p-layout'>
									<Title size='large'>Диагностика по информатике</Title>
									<Text size='small'>
										Помогает учителям проверить свои знания и оценить учебный
										прогресс школьников.
									</Text>
									<Button
										variant={'outline'}
										size={'default'}
										className='self-start px-6 py-5'
									>
										Попробовать
									</Button>
								</div>
								<div className='flex flex-col items-end justify-end'>
									<Image
										width={500}
										height={500}
										alt='Диагностика по информатике'
										className='w-[325px] rounded-br-3xl'
										src='/assets/images/vector/diagnistic.svg'
									/>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</main>
	)
}
