'use client'

import { SECTIONS } from '../create-task-sections'
import { useTaskCreation } from '../model/use-task-creation'
import { taskCreationStore } from '../store/task-creation-store'
import { ChainToCourseModal } from './chain-to-course-modal'
import { DifficultyModal } from './difficulty-modal'
import { isObjectEmpty } from '@/shared/lib/utils'
import { UiCheckbox } from '@/shared/ui/custom/ui-checkbox'
import { Input } from '@/shared/ui/input/input'
import { Label } from '@/shared/ui/input/label'
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
import { HelpCircle, X, Info, LibraryBig } from 'lucide-react'
import React from 'react'

export const CreationMainData: React.FC = () => {
	const { getters, setters } = useTaskCreation()

	return (
		<div className='mb-8 space-y-8 rounded-2xl bg-white shadow-sm'>
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
						<Tooltip>
							<TooltipTrigger asChild>
								<HelpCircle className='h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600' />
							</TooltipTrigger>
							<TooltipContent className='w-80' side='right' align='start'>
								<div className='space-y-2'>
									<Text className='font-semibold' size='small'>
										Как выбрать подходящий курс и раздел?
									</Text>
									<Text size='extraSmall'>
										<strong>Курс:</strong> выбирайте тематическое направление,
										которому соответствует ваше задание
									</Text>
									<Text size='extraSmall'>
										<strong>Раздел:</strong> определяет место задания в
										последовательности изучения материала
									</Text>
									<div className='pt-2'>
										<Text size='extraSmall' className='text-green-600'>
											Пример правильного выбора:
										</Text>
										<Text size='extraSmall'>
											Курс: "Frontend разработка на React"
											<br />
											Раздел: "Хуки и управление состоянием"
											<br /> Задание: "Создание Todo-приложения с useState"
										</Text>
									</div>
								</div>
							</TooltipContent>
						</Tooltip>
					</div>
					<ChainToCourseModal />
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
							заданю будет ограничена. Также его нельзя будет привязать к курсу.
						</Text>
					</div>
				</div>
			</div>

			{/* Выбранный курс (если не анонимно) */}
			{!getters.anonymus && !isObjectEmpty(getters.course) && (
				<>
					<Separator className='my-6 bg-gray-200' />
					<div className='rounded-xl bg-indigo-50 p-6'>
						<Title className='mb-4 flex gap-2 text-lg font-semibold text-indigo-900'>
							<LibraryBig /> Выбранный курс и раздел
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
										{getters.course.chapter.title || 'Не выбрано'}
									</Text>
								</div>
							</div>
						</div>
						<div className='mt-4 flex justify-end'>
							<Button
								variant={'outline'}
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
