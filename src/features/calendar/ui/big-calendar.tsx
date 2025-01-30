'use client'

import './calendar.style.css'
import { UiTooltip } from '@/shared/ui/custom/ui-tooltip'
import { Button } from '@/shared/ui/other/button'
import 'globalize/lib/cultures/globalize.culture.ru'
import { ArrowLeft, ArrowRight, Calendar1Icon } from 'lucide-react'
import moment from 'moment'
import 'moment/locale/ru'
import { useEffect, useMemo, useState } from 'react'
import {
	Calendar,
	momentLocalizer,
	Event,
	ToolbarProps,
	View
} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const events: Event[] = [
	// Ваши события
]

const messages = {
	today: 'Сегодня',
	previous: 'Назад',
	next: 'Вперёд',
	month: 'Месяц',
	week: 'Неделя',
	day: 'День',
	showMore: (total: number) => `Ещё ${total} заданий`
}

export const BigCalendar: React.FC = () => {
	const [view, setView] = useState<View>('month') // Состояние для текущего вида календаря

	const localizer = useMemo(() => momentLocalizer(moment), [])

	useEffect(() => {
		moment.updateLocale('ru', {
			week: { dow: 1 } // Понедельник - первый день недели
		})
	}, [])

	const { components } = useMemo(
		() => ({
			components: {
				toolbar: Toolbar
			}
		}),
		[]
	)

	return (
		<Calendar
			localizer={localizer}
			components={components}
			popup
			messages={messages}
			culture='ru'
			events={events}
			startAccessor='start'
			endAccessor='end'
			views={['day', 'month', 'week']}
			view={view}
			onView={setView} // Обновление состояния при изменении вида
		/>
	)
}

const Toolbar: React.FC<ToolbarProps> = ({ label, onNavigate, onView }) => {
	return (
		<div className='relative mb-1 flex items-center justify-between'>
			<div className='flex gap-2'>
				<UiTooltip content='Назад'>
					<button
						className='rounded-md p-1 transition-colors hover:bg-indigo-300'
						onClick={() => onNavigate('PREV')}
					>
						<ArrowLeft />
					</button>
				</UiTooltip>
				<UiTooltip content='Сейчас'>
					<button
						className='rounded-md p-1 transition-colors hover:bg-indigo-300'
						onClick={() => onNavigate('TODAY')}
					>
						<Calendar1Icon />
					</button>
				</UiTooltip>
				<UiTooltip content='Дальше'>
					<button
						className='rounded-md p-1 transition-colors hover:bg-indigo-300'
						onClick={() => onNavigate('NEXT')}
					>
						<ArrowRight />
					</button>
				</UiTooltip>
			</div>

			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>
				{label}
			</div>

			<div className='flex gap-2'>
				<Button size='sm' onClick={() => onView('month')}>
					Месяц
				</Button>
				<Button size='sm' onClick={() => onView('week')}>
					Неделя
				</Button>
				<Button size='sm' onClick={() => onView('day')}>
					День
				</Button>
			</div>
		</div>
	)
}
