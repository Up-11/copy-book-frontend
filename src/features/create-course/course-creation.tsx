'use client'

import { COURSE_SECTIONS } from './create-course-sections'
import { useCourseCreation } from './model/use-course-creation'
import { useCreateCourseMutation } from '@/shared/api/graphql/generated/output'
import { Section, SectionList } from '@/shared/ui/custom/section-list'
import { ConfirmModal } from '@/shared/ui/modals/confirm-modal'
import { Button } from '@/shared/ui/other/button'
import React, { useState } from 'react'
import { toast } from 'sonner'

export const CourseCreation: React.FC = () => {
	const [activeSection, setActiveSection] = useState(COURSE_SECTIONS.BASIC)
	const { getters, setters } = useCourseCreation()

	const [createCourse, { loading }] = useCreateCourseMutation({
		onCompleted(data) {
			toast.success('Курс успешно создан!')
			setters.id(data.createCourse.id)
			setActiveSection(COURSE_SECTIONS.SECTIONS_AND_TASKS)
		},
		onError(error) {
			toast.error(error.message)
		}
	})

	const handleCreateCourse = () => {
		createCourse({
			variables: {
				data: {
					title: getters.title,
					description: getters.description,
					isDraft: true,
					accessToken: getters.accessToken,
					privacy: getters.privacy
				}
			}
		})
	}

	const sections = Object.values(COURSE_SECTIONS)
	const currentIndex = sections.findIndex(
		section => section.id === activeSection.id
	)
	const isFirstSection = currentIndex === 0
	const isLastSection = currentIndex === sections.length - 1

	const handleNext = () => {
		if (!isLastSection) {
			const nextSection = sections[currentIndex + 1]
			setActiveSection(nextSection)
		}
	}

	const handlePrev = () => {
		if (!isFirstSection) {
			const prevSection = sections[currentIndex - 1]
			setActiveSection(prevSection)
		}
	}

	const handleSectionChange = (section: Section) => {
		setActiveSection(section)
	}

	return (
		<div className='space-y-6'>
			<SectionList
				sections={sections}
				activeSection={activeSection}
				onSectionChange={handleSectionChange}
			/>

			<div className='flex justify-between'>
				<Button
					variant='outline'
					onClick={handlePrev}
					disabled={isFirstSection || loading}
				>
					Назад
				</Button>
				{(() => {
					if (setters.id !== undefined && !isLastSection) {
						return (
							<Button onClick={handleNext} disabled={loading}>
								Следующий этап
							</Button>
						)
					}
					if (isLastSection) {
						return (
							<ConfirmModal
								title='Удалить раздел?'
								description='Для этого в разделе не должно быть уроков, перед удалением убедитель в этом'
								onConfirm={() => {}}
								confirmText='Удалить раздел'
							>
								<Button>Завершить</Button>
							</ConfirmModal>
						)
					}

					if (
						activeSection.id !== COURSE_SECTIONS.DESCRIPTION.id &&
						setters.id === undefined
					) {
						return (
							<Button disabled={loading} onClick={handleCreateCourse}>
								Создать курс
							</Button>
						)
					}

					return null
				})()}
			</div>
		</div>
	)
}
