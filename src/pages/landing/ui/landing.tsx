import {
	Block,
	BlockLink,
	BlockLinkSmall,
	BlockLinkVertical,
} from '@/shared/ui/view/block'
import { Container } from '@/shared/ui/view/container'
import React from 'react'
import Image from 'next/image'
import Title from '@/shared/ui/view/title'
import { Button } from '@/shared/ui/other/button'
import { BookOpen, CodeXml, Wrench } from 'lucide-react'
import Text from '@/shared/ui/view/text'

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
									<Button
										size={'lg'}
										variant={'secondary'}
										className='bg-indigo-500 hover:bg-indigo-500/90 text-white  max-sm:w-full  '
									>
										Начать
									</Button>
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
							<BlockLinkSmall
								size='small'
								color='grey'
								icon={<Wrench size={30} />}
								link='/'
								description='Удобный инструменатрий для учителей'
							/>
							<BlockLinkSmall
								size='small'
								color='grey'
								icon={<CodeXml size={30} />}
								link='/'
								description='Встроенный редактор кода'
							/>
							<BlockLinkSmall
								size='small'
								color='grey'
								icon={<BookOpen size={30} />}
								description='Большое количество материала для обучения'
							/>
						</div>
					</div>
				</Container>
			</section>
			<section>
				<Container>
					<div className='grid justify-center gap-4 lg:grid-cols-[600px_350px] max-lg:grid-cols-1 auto-rows-min'>
						<div className='lg:col-span-1 lg:col-start-1 lg:row-span-2 grid gap-4 justify-between'>
							<BlockLink
								color='purple'
								imageUrl='/assets/images/vector/notebook.svg'
								size='large'
								title='Бесплатные курсы по информатике'
								description='Используйте курсы с 5 по 11 класс — целиком или отдельные задания. Интерактивные карточки не дадут ученикам заскучать'
								link='/'
								customImageClasses='justify-self-end row-start-2 flex flex-col justify-end items-end'
							/>
							<div className='justify-self-end justify-end items-end grid'>
								<BlockLink
									color='blue'
									imageUrl='/assets/images/vector/hand.svg'
									size='large'
									title='Бесплатные курсы по информатике'
									description='Используйте курсы с 5 по 11 класс — целиком или отдельные задания. Интерактивные карточки не дадут ученикам заскучать'
									link='/'
									customImageClasses='justify-self-end row-start-2 flex flex-col justify-end items-end'
									imageSizes='lg:max-w-[293px] lg:w-[293px] max-md:max-w-[140px]'
								/>
							</div>
						</div>

						<div className='lg:col-start-2 lg:row-span-2 h-auto'>
							<BlockLinkVertical
								color='blue'
								imageUrl='/assets/images/vector/guy.svg'
								size='slim'
								title='Удобные инструменты для учителей'
								description='Сосредоточьтесь на преподавании, а рутину оставьте платформе — задания проверяются автоматически, а вся статистика учеников появляется в личном кабинете'
								link='/'
								customImageClasses='justify-self-end row-start-2 row-span-2   justify-end items-end'
								imageSizes='lg:max-w-[300px] lg:w-[300px] max-md:max-w-[140px]'
							/>
						</div>
					</div>
				</Container>
			</section>
			<section className='bg-indigo-50 lg:p-layout rounded-3xl mt-4'>
				<Container className='flex justify-center '>
					<div className='flex flex-col gap-1 text-center'>
						<Title color='indigo' size='extraLarge'>
							Что можно делать в Copybook
						</Title>
						<Text>
							Copybook — это универсальная онлайн-платформа для улучшения ваших
							навыков в программировании и решения задач.
						</Text>
					</div>
				</Container>
			</section>
		</main>
	)
}
