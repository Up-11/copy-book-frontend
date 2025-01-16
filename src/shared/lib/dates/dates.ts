import { differenceInCalendarDays } from 'date-fns'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import RelativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(localizedFormat)
dayjs.extend(RelativeTime)
dayjs.locale('ru')

const DATES_FORMAT_LIMIT = 3

interface SmartFormattingOptions {
	relativeFormatting?: boolean
}

interface FormatDateOptions {
	date: string | Date
	format?: string
	smartFormatting?: SmartFormattingOptions
}

export const formatDate = ({
	date,
	format = 'll',
	smartFormatting = { relativeFormatting: true }
}: FormatDateOptions): string => {
	if (!date) {
		console.warn('Invalid date provided to formatDate')
		return ''
	}

	const parsedDate = dayjs(date)

	if (!parsedDate.isValid()) {
		console.warn('Invalid date format provided to formatDate')
		return ''
	}

	const shouldUseRelativeFormat = isWithinDateLimit(date)

	if (!smartFormatting.relativeFormatting) {
		return parsedDate.format(format)
	}

	return shouldUseRelativeFormat
		? dayjs().to(parsedDate)
		: parsedDate.format(format)
}

const isWithinDateLimit = (date: string | Date): boolean => {
	const daysDifference = differenceInCalendarDays(new Date(), new Date(date))
	return Math.abs(daysDifference) <= DATES_FORMAT_LIMIT
}
