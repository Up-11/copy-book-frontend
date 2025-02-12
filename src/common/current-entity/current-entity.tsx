'use client'

import { ICurrentEntityProps } from './types'
import { useQueryManager } from '@/common/query'
import { WithCondition } from '@/shared/lib/components/with-condition'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import React from 'react'

export const CurrentEntity: React.FC<ICurrentEntityProps> = ({
	title,
	renderHeaderElement,
	description,
	items,
	renderFooter,
	renderUnusualItems,
	renderProgressBar,
	renderDescription
}) => {
	useQueryManager()
	//TODO MB AND SIDEBAR FIXED
	return (
		<div className='flex h-full flex-col gap-3 p-layout'>
			<div className='flex items-center justify-between'>
				<Title size='large'>{title}</Title>
				{renderHeaderElement?.()}
			</div>
			<div className='my-1'>
				{description && (
					<Text size='small' color='gray' className='mt-2'>
						{description}
					</Text>
				)}
				{renderDescription?.()}
			</div>
			{renderProgressBar?.()}

			<section className='mt-4 grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_auto] gap-3'>
				{renderUnusualItems?.()}
				{items.map(item => (
					<WithCondition
						key={item.name}
						condition={!!item.condition || !!item.content}
						className='rounded-lg bg-indigo-100 p-layout'
						render={
							<div>
								{item.name}:<Title>{item.content}</Title>
							</div>
						}
					/>
				))}
			</section>

			{renderFooter?.()}
		</div>
	)
}
