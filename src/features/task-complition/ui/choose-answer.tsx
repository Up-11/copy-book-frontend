'use client'

import { typeFilter } from '@/features/filter/filter.data'
import { CheckBoxGroup } from '@/shared/ui/forms/checkbox-group'
import Title from '@/shared/ui/view/title'
import React from 'react'

export const ChooseAnswer: React.FC = () => {
	return (
		<div className='flex flex-col gap-2'>
			<Title>Выбирите один или несколько ответов</Title>
			<CheckBoxGroup items={typeFilter} limit={-1} />
		</div>
	)
}
