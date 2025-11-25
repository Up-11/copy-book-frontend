'use client'

import { SECTIONS } from '../create-task-sections'
import { SectionList } from '@/shared/ui/custom/section-list'
import React, { useState } from 'react'

export const TaskCreation: React.FC = () => {
	const [activeSection, setActiveSection] = useState(SECTIONS.BASIC)

	const sections = Object.values(SECTIONS)

	return <SectionList sections={sections} activeSection={activeSection} />
}
