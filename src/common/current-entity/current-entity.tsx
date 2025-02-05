'use client'

import { useQueryManager } from '@/common/query'
import { WithCondition } from '@/shared/lib/components/with-condition'
import Text from '@/shared/ui/view/text'
import Title from '@/shared/ui/view/title'
import React from 'react'

interface ICurrentEntityProps {
	title: string
	description: string
	renderFooter: () => React.ReactNode
	renderDifficylty?: () => React.ReactNode
	renderUnusualItems?: () => React.ReactNode
	items: {
		name: string
		content: string | number
	}[]
}

export const CurrentEntity: React.FC<ICurrentEntityProps> = ({
	title,
	renderDifficylty,
	description,
	items,
	renderFooter,
	renderUnusualItems
}) => {
	useQueryManager()
	//TODO MB AND SIDEBAR FIXED
	return (
		<div className='flex h-full flex-col gap-3 p-layout'>
			<div className='flex items-center justify-between'>
				<Title size='large'>{title}</Title>
				{renderDifficylty?.()}
			</div>
			<div className='my-1'>
				<Text size='small' color='gray' className='mt-2'>
					{description}
				</Text>
			</div>

			<section className='mt-4 grid grid-cols-[300px_1fr_1fr] grid-rows-[1fr_auto] gap-3'>
				{items.map(item => (
					<WithCondition
						key={item.content}
						condition={!!item.content}
						className='rounded-lg bg-indigo-100 p-layout'
						render={
							<div>
								{item.name}:<Title>{item.content}</Title>
							</div>
						}
					/>
				))}
				{renderUnusualItems?.()}
			</section>

			{renderFooter()}
		</div>
	)
}
