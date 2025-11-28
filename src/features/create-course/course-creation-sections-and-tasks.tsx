import { ChainToCourseItem } from '../create-task/ui/chain-to-course-item'
import { AddSectionModal } from './add-section-modal'
import { useCourseCreation } from './model/use-course-creation'
import { SectionInfoModal } from './section-info-modal'
import { CourseChapterItem } from '@/entities/course'
import { SearchBar } from '@/entities/search'
import {
	useDeleteSectionMutation,
	useGetSectionsByCourseQuery
} from '@/shared/api/graphql/generated/output'
import { routes } from '@/shared/config/routes'
import { ConfirmModal } from '@/shared/ui/modals/confirm-modal'
import { Button } from '@/shared/ui/other/button'
import { Skeleton } from '@/shared/ui/other/skeleton'
import Text from '@/shared/ui/view/text'
import { Folder, Plus, Trash } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { useDebounceValue } from 'usehooks-ts'

export const CourseCreationSectionsAndTasks: React.FC = () => {
	const { getters, setters } = useCourseCreation()
	const searchParams = useSearchParams()
	const [sectionsSearchTerms, setSectionsSearchTerms] = useState(
		searchParams.get('searchQuery') || ''
	)

	const debouncedSearchTerms = useDebounceValue(sectionsSearchTerms, 500)
	const { data, loading, refetch } = useGetSectionsByCourseQuery({
		variables: { courseId: getters.id, searchTerms: debouncedSearchTerms[0] }
	})

	const [deleteSection, { loading: deleteSectionLoading }] =
		useDeleteSectionMutation({
			onCompleted: () => {
				refetch()
				toast.success('Раздел успешно удален')
			},
			onError: error => {
				toast.error(error.message)
			}
		})

	const handleDeleteSection = (sectionId: string) => {
		deleteSection({ variables: { sectionId: sectionId } })
	}

	return (
		<div>
			<div className='grid h-[600px] grid-cols-3 gap-6'>
				<div className='overflow-hidden rounded-lg border bg-gray-50'>
					<div className='border-b bg-white p-4'>
						<Text className='text-lg font-semibold'>Разделы</Text>
						<Text size='small' color='gray'>
							`Разделы курса "{getters.title}"`
						</Text>
						<div className='mt-2 flex justify-end'>
							<SearchBar
								externalValue={sectionsSearchTerms}
								onChange={setSectionsSearchTerms}
							/>
						</div>
					</div>

					<div className='h-[100%] overflow-y-auto p-4'>
						{loading ? (
							<div className='space-y-3 py-4'>
								{[...Array(3)].map((_, index) => (
									<Skeleton key={index} className='h-16 w-full' />
								))}
							</div>
						) : data?.getSectionsByCourse.length ? (
							<div className='space-y-2'>
								{data.getSectionsByCourse.map(section => (
									<ChainToCourseItem
										key={section.id}
										item={section}
										icon={<Folder className='h-4 w-4' />}
										selectedClassName='border-green-500 bg-green-50'
										selectedTextColor='text-green-600'
										selectedIconColor='text-green-500'
										isSelected={
											getters.section !== null &&
											section.id === getters.section.id
										}
										onClick={() => setters.section(section)}
										renderRight={
											<ConfirmModal
												title='Удалить раздел?'
												variant='warning'
												description='Для этого в разделе не должно быть уроков, перед удалением убедитель в этом'
												onConfirm={() => handleDeleteSection(section.id)}
												confirmButtonLabel='Удалить раздел'
												loading={deleteSectionLoading}
											>
												<Button
													variant={'danger'}
													size={'icon'}
													className='self-start'
												>
													<Trash />
												</Button>
											</ConfirmModal>
										}
									/>
								))}
							</div>
						) : (
							<div className='flex flex-col items-center justify-center text-center'>
								<Folder className='mb-4 h-16 w-16 text-gray-300' />
								<Text color='gray' className='mb-2'>
									В данном курсе нет разделов
								</Text>
							</div>
						)}
						<div className='mt-2 flex w-full justify-center'>
							<AddSectionModal refetch={refetch}>
								<Button variant={'outline'}>
									Добавить раздел <Plus />
								</Button>
							</AddSectionModal>
						</div>
					</div>
				</div>

				<div className='col-span-2 overflow-hidden rounded-lg border bg-gray-50'>
					<div className='border-b bg-white p-4'>
						<Text className='text-lg font-semibold'>Задания</Text>
						<Text size='small' color='gray'>
							Задания, которые можно добавить к разделу
						</Text>
						<div className='mt-2 flex justify-end'>
							<SearchBar />
						</div>
					</div>
					<div className='h-[100%] overflow-y-auto p-4'>
						<div className='flex flex-col items-center justify-center text-center'>
							<Folder className='mb-4 h-16 w-16 text-gray-300' />
							<Text color='gray' className='mb-2'>
								Сейчас нет уроков, не привязанных к курсу, вы можете создать и
								прикрепить их к курсу в любое время.
							</Text>
						</div>
						<div className='mt-2 flex w-full justify-center'>
							<Link href={routes.tasks.teacher.create}>
								<Button variant={'outline'}>
									Перейти на страницу создания уроков
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/*<div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
				<Text className='mb-2 font-semibold text-blue-900'>Текущий выбор:</Text>
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
			</div>*/}
		</div>
	)
}
