/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import './calendar.style.css'
import 'globalize/lib/cultures/globalize.culture.ru'
import moment from 'moment'
import 'moment/locale/ru'
import { Calendar, momentLocalizer, Event } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

/* eslint-disable @typescript-eslint/no-explicit-any */

moment.updateLocale('ru', {
	week: { dow: 1 }
})

const localizer = momentLocalizer(moment)

const events: Event[] = []

export const BigCalendar: React.FC = () => {
	return (
		<Calendar
			localizer={localizer}
			culture='ru'
			events={events}
			startAccessor='start'
			endAccessor='end'
			views={['day', 'month', 'week']}
		/>
	)
}
