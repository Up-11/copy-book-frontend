import { BigCalendar } from '@/features/calendar'
import { RootHeader } from '@/widgets/headers'

export default function Page() {
	return (
		<main className='flex flex-col'>
			<RootHeader />
			<div className='h-[calc(100vh-50px)] p-layout'>
				<BigCalendar />
			</div>
		</main>
	)
}
