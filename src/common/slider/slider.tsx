import './slider.styles.css'
import { cn } from '@/shared/lib/css'
import { PropsWithClassName } from '@/shared/types/props.types'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface SliderProps<T> extends PropsWithClassName {
	renderItems: (item: T) => React.ReactNode
	items: T[]
}

export const Slider = <T,>({
	renderItems,
	items,
	className
}: SliderProps<T>) => {
	return (
		<div className='group relative'>
			<Swiper
				className={cn('h-28 w-[900px]', className)}
				spaceBetween={20}
				slidesPerView={3}
				navigation={{
					nextEl: '.custom-next',
					prevEl: '.custom-prev'
				}}
				modules={[Navigation]}
			>
				{items.map((item, index) => (
					<SwiperSlide key={index}>{renderItems(item)}</SwiperSlide>
				))}
			</Swiper>
			<button className='custom-prev absolute -left-2 top-1/2 z-10 flex -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-primary p-1 text-white opacity-0 transition-all hover:scale-105 group-hover:opacity-100'>
				<ChevronLeft size={20} />
			</button>
			<button className='custom-next absolute -right-2 top-1/2 z-10 flex -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-primary p-1 text-white opacity-0 transition-all hover:scale-105 group-hover:opacity-100'>
				<ChevronRight size={20} />
			</button>
		</div>
	)
}
