'use client'

import { useTaskCreation } from '../model/use-task-creation'
import { AddToCoursePopover } from './add-to-course-popover'
import { DifficultyModal } from './difficulty-modal'
import { difficultyFilter } from '@/features/filter/filter.data'
import { SwitchItem } from '@/features/filter/ui/switch-item'
import { cn } from '@/shared/lib/css'
import { getBadgeByTaskDifficulty } from '@/shared/lib/map'
import { isObjectEmpty } from '@/shared/lib/utils'
import { courses } from '@/shared/mock/mock'
import { TaskDifficulty } from '@/shared/types/task.types'
import { UiCheckbox } from '@/shared/ui/custom/ui-checkbox'
import { Input } from '@/shared/ui/input/input'
import { Label } from '@/shared/ui/input/label'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/ui/modals/popover'
import { Button } from '@/shared/ui/other/button'
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/view/alert'
import { Separator } from '@/shared/ui/view/separator'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/shared/ui/view/tooltip'
import { ArrowRight, HelpCircle, X, Info } from 'lucide-react'
import React from 'react'

export const CreationMainData: React.FC = () => {
	const { getters, setters } = useTaskCreation()
	console.log(getters)

	const difficulty =
		getters.difficulty && getBadgeByTaskDifficulty(getters.difficulty)

	return (
		<div className='space-y-8 rounded-2xl bg-white shadow-sm'>
			<div className='text-center'>
				<Title className='mb-2 font-bold'>Основные данные задания</Title>
				<Text color='gray' size='small'>
					Заполните основную информацию о вашем задании
				</Text>
			</div>
			<div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
				<div className='space-y-4'>
					<div className='flex items-center gap-2'>
						<Label className='text-lg font-semibold' htmlFor='title'>
							Название задания
						</Label>
						<Tooltip>
							<TooltipTrigger asChild>
								<HelpCircle className='h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600' />
							</TooltipTrigger>
							<TooltipContent className='w-80' side='right' align='start'>
								<div className='space-y-2'>
									<Text className='font-semibold' size='small'>
										Как придумать хорошее название?
									</Text>
									<Text size='extraSmall'>
										• Будьте конкретны и информативны
										<br />
										• Укажите технологию или тему
										<br />
										• Отразите суть задания
										<br />• Избегайте общих фраз
									</Text>
									<div className='pt-2'>
										<Text size='extraSmall' className='text-blue-600'>
											Примеры хороших названий:
										</Text>
										<Text size='extraSmall'>
											"React: работа с useState и useEffect"
											<br />
											"Python: парсинг JSON и обработка данных"
											<br />
											"Алгоритмы: сортировка пузырьком на JavaScript"
										</Text>
									</div>
								</div>
							</TooltipContent>
						</Tooltip>
					</div>
					<Input
						id='title'
						onChange={setters.title}
						placeholder='Например: "Основы JavaScript: функции и переменные"'
						defaultValue={getters.title || ''}
					/>
					<Text
						size='extraSmall'
						color='gray'
						className='flex items-center gap-1'
					>
						<Info className='h-3 w-3' />
						Рекомендуется 3-7 слов, отражающих суть задания
					</Text>
				</div>

				{/* Сложность задания */}
				<div className='space-y-4'>
					<div className='flex items-center gap-2'>
						<Label className='text-lg font-semibold'>Уровень сложности</Label>
					</div>
					<DifficultyModal value={getters.difficulty} onChange={setters.diff} />
					<Text
						size='extraSmall'
						color='gray'
						className='flex items-center gap-1'
					>
						<Info className='h-3 w-3' />
						Поможет студентам выбрать подходящие задания
					</Text>
				</div>
			</div>

			<Separator className='my-6 bg-gray-200' />

			{/* Настройки публикации */}
			<div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
				<div className='space-y-4'>
					<div className='flex items-center gap-2'>
						<Title className='text-lg font-semibold'>Привязка к курсу</Title>
						<div className='group relative'>
							<HelpCircle className='h-4 w-4 text-gray-400' />
							<div className='absolute bottom-full left-1/2 mb-2 hidden w-56 -translate-x-1/2 transform rounded-lg bg-gray-900 px-3 py-2 text-xs text-white group-hover:block'>
								Добавьте задание в существующий курс и раздел
								<div className='absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-900'></div>
							</div>
						</div>
					</div>
					<AddToCoursePopover courses={courses}>
						<Button
							className='rounded-lg px-6 py-3 text-base font-medium transition-all hover:shadow-md'
							disabled={getters.anonymus}
						>
							<span>Выбрать курс и раздел</span>
							<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
						</Button>
					</AddToCoursePopover>
					<Text
						size='extraSmall'
						color='gray'
						className='flex items-center gap-1'
					>
						<Info className='h-3 w-3' />
						Необязательно - задание можно опубликовать отдельно
					</Text>
				</div>

				<div className='space-y-4'>
					<div className='flex items-center gap-2'>
						<Title className='text-lg font-semibold'>Настройки видимости</Title>
						<div className='group relative'>
							<HelpCircle className='h-4 w-4 text-gray-400' />
							<div className='absolute bottom-full left-1/2 mb-2 hidden w-48 -translate-x-1/2 transform rounded-lg bg-gray-900 px-3 py-2 text-xs text-white group-hover:block'>
								Управление отображением авторства
								<div className='absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-900'></div>
							</div>
						</div>
					</div>
					<div>
						<UiCheckbox
							text='Опубликовать анонимно'
							onCheckedChange={setters.anonimus}
							value='anonymous'
						/>{' '}
						<Text
							size='extraSmall'
							color='gray'
							className='mt-4 flex items-start gap-1'
						>
							<Info className='h-3 w-3' />
							Задание будет показано без указания автора, но статистика по этому
							заданю будет ограничена.
						</Text>
					</div>
				</div>
			</div>

			{/* Выбранный курс (если не анонимно) */}
			{!getters.anonymus && !isObjectEmpty(getters.course) && (
				<>
					<Separator className='my-6 bg-gray-200' />
					<div className='rounded-xl bg-indigo-50 p-6'>
						<Title className='mb-4 text-lg font-semibold text-indigo-900'>
							📚 Выбранный курс
						</Title>
						<div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
							<div className='space-y-2'>
								<Text className='font-medium text-indigo-700'>Курс</Text>
								<div className='flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm'>
									<div className='h-3 w-3 rounded-full bg-indigo-500'></div>
									<Text className='font-semibold'>
										{getters.course.title || 'Не выбрано'}
									</Text>
								</div>
							</div>
							<div className='space-y-2'>
								<Text className='font-medium text-indigo-700'>Раздел</Text>
								<div className='flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm'>
									<div className='h-3 w-3 rounded-full bg-indigo-300'></div>
									<Text className='font-semibold'>
										{getters.course.chapter || 'Не выбрано'}
									</Text>
								</div>
							</div>
						</div>
						<div className='mt-4 flex justify-end'>
							<Button
								variant={'outline'}
								onClick={() => setters.course({ title: '', chapter: '' })}
								className='rounded-lg border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700'
							>
								<X className='mr-2 h-4 w-4' />
								Удалить привязку
							</Button>
						</div>
					</div>
				</>
			)}

			<Alert className='space-x-2'>
				<Info />
				<AlertTitle>Совет по заполнению</AlertTitle>
				<AlertDescription>
					Хорошее название и правильная сложность помогут студентам быстрее
					найти ваше задание. Не забудьте проверить все данные перед переходом к
					следующему шагу.
				</AlertDescription>
			</Alert>
		</div>
	)
}
