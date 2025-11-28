'use client'

import { useTaskCreation } from '../model/use-task-creation'
import { ChainToCourseItem } from './chain-to-course-item'
import { courses } from '@/shared/mock/mock'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui/modals/dialog'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import {
	ArrowRight,
	Paperclip,
	Plus,
	BookOpen,
	Folder,
	FileText,
	SquareCheck
} from 'lucide-react'
import { useState } from 'react'

// Моковые данные
const mockCourses = [
	{
		id: '1',
		title: 'Frontend разработка на React',
		lessonsCount: 24,
		sectionsCount: 3,
		studentsCount: 156,
		sections: [
			{
				id: '1-1',
				title: 'Основы React',
				order: 1,
				lessonsCount: 8,
				lessons: [
					{
						id: '1-1-1',
						title: 'Введение в React',
						difficulty: 'Легкий',
						duration: 10
					},
					{
						id: '1-1-2',
						title: 'JSX синтаксис',
						difficulty: 'Легкий',
						duration: 15
					}
				]
			},
			{
				id: '1-2',
				title: 'Хуки и состояние',
				order: 2,
				lessonsCount: 10,
				lessons: [
					{
						id: '1-2-1',
						title: 'useState и useEffect',
						difficulty: 'Средний',
						duration: 20
					},
					{
						id: '1-2-2',
						title: 'Кастомные хуки',
						difficulty: 'Сложный',
						duration: 30
					}
				]
			}
		]
	},
	{
		id: '2',
		title: 'JavaScript для начинающих',
		lessonsCount: 18,
		sectionsCount: 2,
		studentsCount: 89,
		sections: [
			{
				id: '2-1',
				title: 'Основы JavaScript',
				order: 1,
				lessonsCount: 6,
				lessons: [
					{
						id: '2-1-1',
						title: 'Переменные и типы данных',
						difficulty: 'Легкий',
						duration: 15
					},
					{
						id: '2-1-2',
						title: 'Операторы и условия',
						difficulty: 'Легкий',
						duration: 20
					}
				]
			},
			{
				id: '2-2',
				title: 'Функции и методы',
				order: 2,
				lessonsCount: 8,
				lessons: [
					{
						id: '2-2-1',
						title: 'Создание простых функций',
						difficulty: 'Легкий',
						duration: 15
					},
					{
						id: '2-2-2',
						title: 'Работа с методами массивов',
						difficulty: 'Средний',
						duration: 25
					},
					{
						id: '2-2-3',
						title: 'Стрелочные функции',
						difficulty: 'Средний',
						duration: 20
					}
				]
			}
		]
	}
]

export const ChainToCourseModal: React.FC = ({}) => {
	const { getters, setters } = useTaskCreation()

	const [isOpen, setIsOpen] = useState(false)
	const [selectedCourse, setSelectedCourse] = useState(null)
	const [selectedSection, setSelectedSection] = useState(null)

	const closeModal = () => {
		setIsOpen(false)
		setSelectedCourse(null)
		setSelectedSection(null)
	}

	const handleCourseClick = course => {
		if (selectedCourse?.id === course.id) {
			setSelectedCourse(null)
			setSelectedSection(null)
		} else {
			setSelectedCourse(course)
			setSelectedSection(null)
		}
	}

	const handleSectionClick = section => {
		if (selectedSection?.id === section.id) {
			setSelectedSection(null)
		} else {
			setSelectedSection(section)
		}
	}

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button
					className='rounded-lg px-6 py-3 text-base font-medium transition-all'
					disabled={getters.anonymus}
				>
					Выбрать курс и раздел
				</Button>
			</DialogTrigger>
			<DialogContent className='z-[1100] min-w-[90%] max-w-7xl'>
				<DialogHeader>
					<DialogTitle className='text-2xl font-bold'>
						Привязка задания к курсу
					</DialogTitle>
					<DialogDescription>
						Выберите курс, раздел и пространство между заданиями для
						структурирования учебных материалов
					</DialogDescription>
				</DialogHeader>

				<div className='grid h-[500px] grid-cols-3 gap-6'>
					<div className='overflow-hidden rounded-lg border bg-gray-50'>
						<div className='border-b bg-white p-4'>
							<Text className='text-lg font-semibold'>Курсы</Text>
							<Text size='small' color='gray'>
								Выберите учебный курс
							</Text>
						</div>
						<div className='h-[calc(100%-80px)] space-y-2 overflow-y-auto p-4'>
							{mockCourses.map(course => (
								<ChainToCourseItem
									key={course.id}
									item={course}
									isSelected={selectedCourse?.id === course.id}
									smallText={`${course.lessonsCount} заданий • ${course.sectionsCount} секций`}
									onClick={handleCourseClick}
									icon={<BookOpen className='h-4 w-4' />}
									selectedClassName='border-blue-500 bg-blue-50 '
									selectedTextColor='text-blue-600'
									selectedIconColor='text-blue-500'
								/>
							))}
						</div>
					</div>

					<div className='overflow-hidden rounded-lg border bg-gray-50'>
						<div className='border-b bg-white p-4'>
							<Text className='text-lg font-semibold'>Разделы</Text>
							<Text size='small' color='gray'>
								{selectedCourse
									? `Разделы курса "${selectedCourse.title}"`
									: 'Сначала выберите курс'}
							</Text>
						</div>
						<div className='h-[calc(100%-80px)] overflow-y-auto p-4'>
							{selectedCourse ? (
								<div className='space-y-2'>
									{selectedCourse.sections.map(section => (
										<ChainToCourseItem
											key={section.id}
											item={section}
											isSelected={selectedSection?.id === section.id}
											smallText={`Раздел ${section.order} • ${section.lessonsCount} заданий`}
											onClick={handleSectionClick}
											icon={<Folder className='h-4 w-4' />}
											selectedClassName='border-green-500 bg-green-50 '
											selectedTextColor='text-green-600'
											selectedIconColor='text-green-500'
										/>
									))}
								</div>
							) : (
								<div className='flex h-full flex-col items-center justify-center text-center'>
									<Folder className='mb-4 h-16 w-16 text-gray-300' />
									<Text color='gray' className='mb-2'>
										Курс не выбран
									</Text>
									<Text size='small' color='gray'>
										Выберите курс слева чтобы увидеть доступные разделы
									</Text>
								</div>
							)}
						</div>
					</div>

					<div className='overflow-hidden rounded-lg border bg-gray-50'>
						<div className='border-b bg-white p-4'>
							<Text className='text-lg font-semibold'>Задания</Text>
							<Text size='small' color='gray'>
								{selectedSection
									? `Задания раздела "${selectedSection.title}"`
									: selectedCourse
										? 'Сначала выберите раздел'
										: 'Сначала выберите курс и раздел'}
							</Text>
						</div>
						<div className='h-[calc(100%-80px)] overflow-y-auto p-4'>
							{selectedSection ? (
								<div className='space-y-2'>
									{selectedSection.lessons.map((lesson, index) => (
										<div key={lesson.id}>
											<div className='select-none rounded-lg border border-gray-200 bg-white p-4 transition-all'>
												<div className='flex gap-2'>
													<SquareCheck className='mt-1 h-4 w-4' />

													<div className='self-start'>
														<Text className='font-semibold'>
															{lesson.title}
														</Text>
														<Text size='small' color='gray' className='mt-1'>
															{lesson.difficulty} • {lesson.duration} мин
														</Text>
													</div>
												</div>
											</div>

											{index < selectedSection.lessons.length - 1 && (
												<div className='py-2'>
													<Button
														variant='outline'
														className='w-full border-2 border-dashed border-gray-300 bg-white'
													>
														<Plus className='mr-2 h-4 w-4' />
														Добавить задание сюда
													</Button>
												</div>
											)}
										</div>
									))}

									<div className='pt-2'>
										<Button
											variant='outline'
											className='w-full border-2 border-dashed border-gray-300 bg-white'
										>
											<Plus className='mr-2 h-4 w-4' />
											Добавить в конец раздела
										</Button>
									</div>
								</div>
							) : (
								<div className='flex h-full flex-col items-center justify-center text-center'>
									<FileText className='mb-4 h-16 w-16 text-gray-300' />
									<Text color='gray' className='mb-2'>
										{selectedCourse ? 'Раздел не выбран' : 'Курс не выбран'}
									</Text>
									<Text size='small' color='gray'>
										{selectedCourse
											? 'Выберите раздел слева чтобы увидеть задания'
											: 'Выберите курс чтобы начать'}
									</Text>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
					<Text className='mb-2 font-semibold text-blue-900'>
						Текущий выбор:
					</Text>
					<div className='flex items-center gap-4'>
						{selectedCourse ? (
							<div className='flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800'>
								<BookOpen className='h-3 w-3' />
								{selectedCourse.title}
							</div>
						) : (
							<div className='rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600'>
								Курс не выбран
							</div>
						)}

						<div className='text-gray-400'>
							<ArrowRight />
						</div>

						{selectedSection ? (
							<div className='flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800'>
								<Folder className='h-3 w-3' />
								{selectedSection.title}
							</div>
						) : (
							<div className='rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600'>
								Раздел не выбран
							</div>
						)}
					</div>
				</div>

				<DialogFooter>
					<Button variant='outline' onClick={closeModal}>
						Отмена
					</Button>
					<Button
						className='gap-2'
						disabled={!selectedCourse || !selectedSection}
					>
						<Paperclip className='h-4 w-4' />
						Привязать выбранное
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
