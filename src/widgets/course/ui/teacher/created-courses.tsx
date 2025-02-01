'use client'

import { PaginationPageLayout } from '@/common/layouts'
import { CreatedCoursesItem } from '@/entities/course'
import { courses } from '@/shared/mock/mock'
import { useLayout } from '@/shared/model/use-layout'
import React from 'react'

export const CreatedCourses: React.FC = () => {
	const { isGrid, layout } = useLayout()

	return (
		<PaginationPageLayout
			isTask={false}
			filters={false}
			layout={layout}
			items={courses.map(course => (
				<CreatedCoursesItem
					isDashboard={false}
					key={course.courseId}
					item={course}
					isGrid={isGrid}
				/>
			))}
		/>
	)
}
