'use client'

import { useCourseCreation } from './model/use-course-creation'
import { PickPrivacy } from './pick-privacy'
import {
	CoursePrivacy,
	useGenerateAccessTokenLazyQuery
} from '@/shared/api/graphql/generated/output'
import { UiInputOtp } from '@/shared/ui/custom/ui-input-otp'
import { Input } from '@/shared/ui/input/input'
import { Label } from '@/shared/ui/input/label'
import { Button } from '@/shared/ui/other/button'
import { Alert, AlertTitle, AlertDescription } from '@/shared/ui/view/alert'
import { Separator } from '@/shared/ui/view/separator'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/shared/ui/view/tooltip'
import { HelpCircle, Info, BookOpen } from 'lucide-react'
import React from 'react'

export const CourseCreationMainData: React.FC = () => {
	const { getters, setters } = useCourseCreation()
	const [generateAccessToken, { loading }] = useGenerateAccessTokenLazyQuery()

	const handleGenerateToken = async () => {
		const { data } = await generateAccessToken()
		if (data?.generateAccessToken) {
			setters.accessToken(data.generateAccessToken)
		}
	}
	return (
		<div className='mb-8 space-y-8'>
			<div className='text-center'>
				<Title className='mb-2 font-bold'>Основные данные курса</Title>
				<Text color='gray' size='small'>
					Заполните основную информацию о вашем курсе
				</Text>
			</div>

			<div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
				<div className='space-y-4'>
					<div className='flex items-center gap-2'>
						<Label className='text-lg font-semibold' htmlFor='title'>
							Название курса
						</Label>
						<Tooltip>
							<TooltipTrigger asChild>
								<HelpCircle className='h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600' />
							</TooltipTrigger>
							<TooltipContent className='w-80' side='right' align='start'>
								<div className='space-y-2'>
									<Text className='font-semibold' size='small'>
										Как придумать хорошее название курса?
									</Text>
									<Text size='extraSmall'>
										• Укажите основную технологию или тему
										<br />
										• Отразите уровень подготовки (для начинающих, продвинутых)
										<br />
										• Добавьте конкретику о содержании
										<br />• Используйте привлекательные, но информативные
										формулировки
									</Text>
									<div className='pt-2'>
										<Text size='extraSmall' className='text-blue-600'>
											Примеры хороших названий:
										</Text>
										<Text size='extraSmall'>
											"JavaScript: полный курс от основ до продвинутого уровня"
											<br />
											"React + TypeScript - современная фронтенд разработка"
											<br />
											"Python для анализа данных: Pandas, NumPy, Matplotlib"
										</Text>
									</div>
								</div>
							</TooltipContent>
						</Tooltip>
					</div>
					<Input
						id='title'
						placeholder='Например: "JavaScript для начинающих: от основ до реальных проектов"'
						className='w-full'
						value={getters.title}
						onChange={e => setters.title(e.target.value)}
					/>
					<Text
						size='extraSmall'
						color='gray'
						className='flex items-center gap-1'
					>
						<Info className='h-3 w-3' />
						Рекомендуется 5-10 слов, четко отражающих содержание курса
					</Text>
				</div>
				<div className='space-y-6'>
					<div className='flex items-center gap-2'>
						<Title className='text-lg font-semibold'>Настройки доступа</Title>
						<Tooltip>
							<TooltipTrigger asChild>
								<HelpCircle className='h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600' />
							</TooltipTrigger>
							<TooltipContent className='w-80' side='right' align='start'>
								<div className='space-y-2'>
									<Text className='font-semibold' size='small'>
										Как выбрать подходящий тип доступа?
									</Text>
									<Text size='extraSmall'>
										<strong>Публичный:</strong> курс виден всем пользователям
										платформы
									</Text>
									<Text size='extraSmall'>
										<strong>По коду:</strong> доступ только для тех, у кого есть
										код курса
									</Text>
									<Text size='extraSmall'>
										<strong>Приватный:</strong> только по вашему приглашению
									</Text>
									<div className='pt-2'>
										<Text size='extraSmall' className='text-blue-600'>
											Рекомендации:
										</Text>
										<Text size='extraSmall'>
											• Для открытых курсов - Публичный
											<br />
											• Для учебных групп - По коду
											<br />• Для приватного контента - Приватный
										</Text>
									</div>
								</div>
							</TooltipContent>
						</Tooltip>
					</div>
					<PickPrivacy />
				</div>
			</div>

			{getters.privacy === CoursePrivacy.ByToken && (
				<>
					<Separator className='my-6 bg-gray-200' />
					<div className='grid grid-cols-1 gap-8 lg:grid-cols-1'>
						<div className='space-y-6'>
							<div className='flex items-center gap-2'>
								<Title className='flex items-center gap-2 text-lg font-semibold'>
									<BookOpen className='h-5 w-5' />
									Код курса
								</Title>
							</div>

							<div className='rounded-xl bg-indigo-50 p-6'>
								<Text className='mb-4 text-sm text-indigo-700'>
									Студенты смогут присоединиться к курсу используя этот код:
								</Text>
								<div className='flex items-center gap-4'>
									<div className='flex-1'>
										<UiInputOtp
											slotClassName='size-10 text-lg'
											value={getters.accessToken}
										/>
									</div>
									<Button
										onClick={() => handleGenerateToken()}
										disabled={Boolean(getters.id)}
										loading={loading}
										variant='primary'
										className='whitespace-nowrap'
									>
										Сгенерировать код
									</Button>
								</div>
								<Text
									size='extraSmall'
									color='gray'
									className='mt-3 flex items-start gap-1'
								>
									<Info className='mt-0.5 h-3 w-3' />
									Код можно изменить в любой момент. Старые коды перестанут
									работать.
								</Text>
							</div>
						</div>
					</div>
				</>
			)}

			<Alert className='space-x-2'>
				<Info className='h-4 w-4' />
				<AlertTitle className=''>Совет по созданию курса</AlertTitle>
				<AlertDescription className=''>
					Хорошее название и понятное описание помогут привлечь больше
					студентов. Не забудьте выбрать подходящий тип доступа и сгенерировать
					код, если курс будет доступен по приглашению.
				</AlertDescription>
			</Alert>
		</div>
	)
}
