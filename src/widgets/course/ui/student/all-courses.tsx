'use client'

import { PaginationPageLayout } from '@/common/layouts'
import { AllCoursesItem } from '@/entities/course'
import { courses } from '@/shared/mock/mock'
import { useLayout } from '@/shared/model/use-layout'
import React from 'react'

export const AllCourses: React.FC = () => {
	const { isGrid, layout } = useLayout()

	return (
		<PaginationPageLayout
			isTask={false}
			layout={layout}
			items={courses.map(course => (
				<AllCoursesItem
					isDashboard={false}
					key={course.courseId}
					item={course}
					isGrid={isGrid}
				/>
			))}
		/>
	)
}
