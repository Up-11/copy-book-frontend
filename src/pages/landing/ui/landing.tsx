import { Block, BlockLink } from '@/shared/ui/custom/block'
import { Container } from '@/shared/ui/custom/container'
import React from 'react'
import Image from 'next/image'
import Title from '@/shared/ui/view/title'
import { Button } from '@/shared/ui/other/button'
import { BookOpen, CodeXml, Wrench } from 'lucide-react'

export const Landing: React.FC = ({}) => {
	return (
		<main className='lg:p-layout pt-header  bg-indigo-600 bg-image  '>
			<Container>
				<div className='flex justify-center mt-20'>
					<Block
						className=' grid grid-cols-1 lg:grid-cols-2 gap-4 '
						color='white'
						size='extraLarge'
					>
						<div className=' flex flex-col gap-10 lg:p-10 max-md:p-5 p-4 max-sm:p-2  '>
							<div className='flex flex-col '>
								<Title gentiumFont size='giant' className='uppercase'>
									COPYBOOK
								</Title>
								<p className='font-semibold text-4xl  max-sm:text-xl '>
									Делаем образование <br /> доступным каждому!
								</p>
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
								width={500}
								height={500}
								alt='image'
								className='object-cover h-full w-full rounded-3xl'
								loading='lazy'
							/>
						</div>
					</Block>
				</div>
				<div className=' mx-auto  mt-8  '>
					<div className=' flex justify-center gap-5  lg:gap-5 flex-wrap'>
						<BlockLink
							size='small'
							color='grey'
							icon={<Wrench size={40} />}
							link='/'
							description='Удобный инструменатрий для учителей'
						/>
						<BlockLink
							size='small'
							color='grey'
							icon={<CodeXml size={40} />}
							link='/'
							description='Встроенный редактор кода'
						/>
						<BlockLink
							size='small'
							color='grey'
							icon={<BookOpen size={40} />}
							description='Большое количество материала для обучения'
						/>
					</div>
				</div>
			</Container>
		</main>
	)
}
