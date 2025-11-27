'use client'

import { SECTIONS } from '../create-task-sections'
import { Section, SectionList } from '@/shared/ui/custom/section-list'
import { Button } from '@/shared/ui/other/button'
import React, { useState } from 'react'

export const TaskCreation: React.FC = () => {
	const [activeSection, setActiveSection] = useState(SECTIONS.BASIC)

	const sections = Object.values(SECTIONS)
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
				{/* Кнопка назад */}
				<Button
					variant='outline'
					onClick={handlePrev}
					disabled={isFirstSection}
				>
					Назад
				</Button>

				{/* Кнопка вперед */}
				<Button onClick={handleNext} disabled={isLastSection}>
					{isLastSection ? 'Завершить' : 'Следующий этап'}
				</Button>
			</div>
		</div>
	)
}
