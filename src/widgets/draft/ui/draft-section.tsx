'use client'

import { PaginationPageLayout } from '@/common/layouts'
import { DraftItem } from '@/entities/draft'
import { DRAFT_MOCK } from '@/entities/draft/mock.data'
import { useLayout } from '@/shared/model/use-layout'
import React from 'react'

export const DraftSection: React.FC = () => {
	const { isGrid, layout } = useLayout()

	return (
		<PaginationPageLayout
			isDraft
			layout={layout}
			items={DRAFT_MOCK.map(draft => (
				<DraftItem key={draft.id} {...draft} isGrid={isGrid} />
			))}
		/>
	)
}
