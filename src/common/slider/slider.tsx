import './slider.styles.css'
import { cn } from '@/shared/lib/css'
import { getBadgeByTaskType, getStatus } from '@/shared/lib/map'
import { CourseItem } from '@/shared/types/course.types'
import { MicroTasks, TaskStatus } from '@/shared/types/task.types'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface SliderProps<T> {
	items: T[]
}

export const Slider = <T extends CourseItem | MicroTasks>({
	items
}: SliderProps<T>) => {
	return (
		<div className='relative group'>
			<Swiper
				className='w-[900px] h-28 '
				spaceBetween={20}
				slidesPerView={3}
				navigation={{
					nextEl: '.custom-next',
					prevEl: '.custom-prev'
				}}
				modules={[Navigation]}
			>
				{items.map((item, index) => (
					<SwiperSlide key={index}>
						<div
							className={cn(
								'flex flex-col p-2 cursor-default select-none  h-full bg-accent rounded-md',
								item.status === TaskStatus.Closed && 'bg-green-100',
								item.status === TaskStatus.Active && 'bg-amber-50',
								item.status === TaskStatus.Pending && 'bg-cyan-50'
							)}
						>
							<div className='flex justify-between items-center'>
								<Title size='small'> {item.title}</Title>
								<Text size='extraSmall' className='font-bold'>
									{getStatus(item.status!)}
								</Text>
							</div>
							<Text size='extraSmall'> {item.description}</Text>
							<div className='flex justify-end mt-auto'>
								<Text size='extraSmall' className='font-bold'>
									{getBadgeByTaskType(item.type!).text}
								</Text>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<button className='custom-prev transition-all opacity-0 hover:scale-105 group-hover:opacity-100 flex justify-center items-center cursor-pointer absolute top-1/2 -left-2 transform -translate-y-1/2 bg-primary text-white rounded-full p-1 z-10 '>
				<ChevronLeft size={20} />
			</button>
			<button className='custom-next transition-all opacity-0  hover:scale-105 group-hover:opacity-100 flex justify-center items-center cursor-pointer absolute top-1/2 -right-2 transform -translate-y-1/2 bg-primary text-white rounded-full p-1 z-10 '>
				<ChevronRight size={20} />
			</button>
		</div>
	)
}
