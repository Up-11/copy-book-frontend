import { BigCalendar, SmallCalendar } from '@/features/calendar'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Календарь'
}

export default function Page() {
	return (
		<main className='grid h-screen grid-cols-[20%_1fr] p-layout'>
			<section className='flex flex-col gap-4'>
				<SmallCalendar />
			</section>
			<section>
				<BigCalendar />
			</section>
		</main>
	)
}
