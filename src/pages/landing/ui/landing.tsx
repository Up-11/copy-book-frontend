import { Block } from '@/shared/ui/view/block'
import { Container } from '@/shared/ui/view/container'
import React from 'react'
import Image from 'next/image'
import Title from '@/shared/ui/view/title'
import { Button } from '@/shared/ui/other/button'
import { ArrowUpRightIcon, BookOpen, CodeXml, Wrench } from 'lucide-react'
import Text from '@/shared/ui/view/text'
import { WhiteBlock } from './white-block'
import { routes } from '@/shared/config/routes'
import Link from 'next/link'
import { cn } from '@/shared/lib/css'
import { ListElement } from '@/shared/ui/view/list-element'

export const Landing: React.FC = ({}) => {
	return (
		<main>
			<section className='bg-indigo-600 bg-image lg:p-layout pt-header'>
				<Container>
					<div className='flex justify-center mt-20'>
						<Block
							className=' grid grid-cols-1 lg:grid-cols-2 gap-4 '
							color='white'
							size='extraLarge'
						>
							<div className=' flex flex-col gap-10 lg:p-10 max-md:p-5 p-4 max-sm:p-2  '>
								<div className='flex flex-col '>
									<Title
										gentiumFont
										size='giant'
										className='uppercase gr-text animate-gradient'
									>
										COPYBOOK
									</Title>
									<Text
										size='extraLarge'
										className='font-semibold text-4xl max-sm:text-xl  '
									>
										Делаем образование <br /> доступным каждому!
									</Text>
								</div>
								<div className='max-sm:mx-4'>
									<Link href={routes.home}>
										<Button
											size={'lg'}
											variant={'secondary'}
											className='bg-indigo-500 hover:bg-indigo-500/90 text-white  max-sm:w-full text-xl'
										>
											Начать
										</Button>
									</Link>
								</div>
							</div>
							<div className='col-span-1 max-sm:mt-4'>
								<Image
									src={'/assets/images/vector/cubes.svg'}
									width={400}
									height={400}
									alt='image'
									className='object-cover h-full w-full rounded-3xl '
									loading='lazy'
								/>
							</div>
						</Block>
					</div>
					<div className=' my-8  '>
						<div className=' flex sm:justify-center max-lg:flex-col lg:flex-row lg:justify-between gap-3 pb-4  lg:gap-8 '>
							<Block
								className={cn(
									'grid grid-cols-12 items-start p-7 relative  rounded-3xl'
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
									className='col-span-2 justify-self-end place-self-start self-start'
								>
									<ArrowUpRightIcon size={40} />
								</Link>
							</Block>
							<Block
								className={cn(
									'grid grid-cols-12 items-start p-7 relative  rounded-3xl'
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
									className='col-span-2 justify-self-end place-self-start self-start'
								>
									<ArrowUpRightIcon size={40} />
								</Link>
							</Block>
							<Block
								className={cn(
									'grid grid-cols-12 items-start p-7 relative  rounded-3xl'
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
					<div className='grid gap-4 relative lg:grid-cols-3 max-lg:grid-cols-1 auto-rows-min grid-rows-2'>
						{/* Первый блок */}
						<Link
							href={routes.home}
							className='bg-purple-100 rounded-3xl flex max-md:flex-col col-span-2 max-lg:col-span-3 row-span-1'
						>
							<div className='flex px-layout pt-layout '>
								<div className='flex flex-col gap-3 '>
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
							<div className='flex justify-end h-full items-end max-w-[350px] w-full'>
								<Image
									width={500}
									height={500}
									src='/assets/images/vector/notebook.svg'
									alt='Бесплатные курсы по информатике'
									className='object-cover h-auto'
								/>
							</div>
							<div className='max-md:hidden px-layout pt-layout'>
								<ArrowUpRightIcon size={40} className='text-purple-400' />
							</div>
						</Link>

						{/* Второй блок */}
						<Link
							href={routes.home}
							className='bg-sky-100  rounded-3xl flex max-md:flex-col items-start gap-4 col-span-2 max-lg:col-span-3 row-start-2 row-span-1'
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
								<div className='max-md:block hidden'>
									<ArrowUpRightIcon size={40} className='text-sky-400' />
								</div>
							</div>
							<div className='flex justify-end items-end w-full'>
								<Image
									width={300}
									height={300}
									src='/assets/images/vector/hand.svg'
									alt='Подготовка к ЕГЭ'
									className='object-cover max-w-[200px] h-auto'
								/>
							</div>
							<div className='max-md:hidden px-layout pt-layout'>
								<ArrowUpRightIcon size={40} className='text-sky-400' />
							</div>
						</Link>

						{/* Третий блок (справа, вертикально) */}
						<div className='bg-sky-100  rounded-3xl flex flex-col items-start gap-4 lg:col-span-1 max-lg:col-span-3 row-span-2'>
							<div className='flex px-layout pt-layout justify-between w-full'>
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
							<div className='flex justify-end items-end w-full'>
								<Image
									width={300}
									height={300}
									src='/assets/images/vector/guy.svg'
									alt='Удобные инструменты'
									className='object-cover  h-auto'
								/>
							</div>
						</div>
					</div>
				</Container>
			</section>
			<section className='bg-indigo-50 lg:p-layout rounded-3xl mt-4'>
				<Container className='flex justify-center  '>
					<div className='flex flex-col gap-4 text-center my-4 w-full'>
						<Title color='indigo' size='extraLarge'>
							Что можно делать в Copybook
						</Title>
						<Text>
							Copybook — это универсальная онлайн-платформа для улучшения ваших
							навыков в программировании и решения задач.
						</Text>
						<div className='flex justify-center mt-5 flex-col gap-4 '>
							<WhiteBlock
								link={routes.home}
								title='Удобные инструменты для учителей'
								list={[
									'Полный комплект готовых материалов для уроков и домашних заданий: презентации, рабочие тетради, практические работы',
									'Яркие интерактивные карточки помогут закрепить теорию и подойдут для учеников с разным уровнем подготовки',
									'Тренажёры по программированию подойдут, чтобы освоить Blockly и Python',
								]}
							/>
							<WhiteBlock
								link={routes.home}
								title='Технологии для комфортной работы учителя'
								list={[
									'Гибкие группы. Объединяйте учеников по классу, возрасту или успеваемости',
									'Статистика в личном кабинете учителя — следите за успеваемостью учеников по группам, классам или отдельным ученикам',
									'Автоматическая проверка домашних заданий — результаты появляются сразу, как только ученик заканчивает решение',
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
									'Обучающие вебинары для педагогов и разборы заданий для школьников помогут разобраться подготовиться к экзамену',
								]}
							/>
						</div>
					</div>
				</Container>
			</section>
			<section>
				<Container className='mx-auto'>
					<div className='flex flex-col justify-center mt-10'>
						<div className='flex justify-center'>
							<Title size='extraLarge'>Помогаем развиваться</Title>
						</div>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
							<div className='bg-sky-100 flex rounded-3xl col-span-1 sm:col-span-2 lg:col-span-3 max-lg:flex-col'>
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
								<div className='flex flex-col h-full justify-start items-start w-full'>
									<Image
										width={800}
										height={800}
										src='/assets/images/vector/notebook-2.svg'
										alt='Бесплатные курсы по информатике'
										className='object-cover h-auto w-full'
									/>
								</div>
							</div>

							{/* Повышение квалификации */}
							<div className='bg-sky-100 flex flex-col gap-2 p-layout rounded-3xl col-span-1'>
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
							<div className='bg-sky-100 flex flex-col gap-2 p-layout rounded-3xl col-span-1'>
								<Title className='font-semibold break-words' size='large'>
									Профессиональные конкурсы
								</Title>
								<Text size='small'>
									Создавайте авторские уроки и разрабатывайте проекты для
									учителей со всей страны. Опубликуйте свою работу на платформе
									Яндекс Учебника и выиграйте ценные призы.
								</Text>
							</div>

							{/* Призы и награды */}
							<div className='bg-sky-100 flex flex-col gap-2 p-layout rounded-3xl col-span-1'>
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
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
							<div className='col-span-1 bg-purple-100 rounded-3xl flex flex-col'>
								<div className='p-layout flex flex-col items-start gap-4'>
									<Title size='large'>Курсы повышения квалификации</Title>
									<Text size='small'>
										Курсы по нейросетям, программированию и гибким навыкам для
										учителей. Принципы доказательной педагогики и высокие
										технологии Яндекса в курсах для учеников.
									</Text>
									<Button
										variant={'outline'}
										size={'default'}
										className='px-6 py-5 self-start'
									>
										Попробовать
									</Button>
								</div>
								<div className='flex flex-col justify-end items-end  '>
									<Image
										width={500}
										height={500}
										alt='Курсы повышения квалификации'
										className='h-auto w-[244px]'
										src='/assets/images/vector/instruments.svg'
									/>
								</div>
							</div>

							<div className='col-span-1 bg-orange-100 rounded-3xl flex flex-col'>
								<div className='p-layout flex flex-col items-start gap-4'>
									<Title size='large'>Диагностика по информатике</Title>
									<Text size='small'>
										Помогает учителям проверить свои знания и оценить учебный
										прогресс школьников.
									</Text>
									<Button
										variant={'outline'}
										size={'default'}
										className='px-6 py-5 self-start'
									>
										Попробовать
									</Button>
								</div>
								<div className='flex flex-col justify-end items-end  '>
									<Image
										width={500}
										height={500}
										alt='Диагностика по информатике'
										className='rounded-br-3xl w-[325px]'
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
