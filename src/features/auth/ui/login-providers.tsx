import React from 'react'
import Image from 'next/image'
import Text from '@/shared/ui/view/text'
import { VkIcon } from '@/shared/ui/icons/vk'

export const LoginProviders: React.FC<{
	onClickYandex: () => void
	onClickVk: () => void
}> = ({ onClickVk, onClickYandex }) => {
	return (
		<div className='flex flex-col justify-between gap-2 '>
			<div
				onClick={onClickVk}
				className=' w-full bg-blue-600 h-10 rounded-xl cursor-pointer flex items-center justify-center gap-1'
			>
				<VkIcon color='white' className='w-8 h-8' />
				<Text color='white' size='small'>
					Войти с VK ID{' '}
				</Text>
			</div>
			<div
				onClick={onClickYandex}
				className=' w-full bg-black h-10 rounded-xl flex items-center justify-center gap-1 cursor-pointer '
			>
				<div className='h-8 w-8'>
					<Image
						src='/assets/icons/yandex.svg'
						width={100}
						height={100}
						alt='yandex'
					/>
				</div>
				<Text color='white' size='small'>
					Войти с Яндекс ID
				</Text>
			</div>
		</div>
	)
}
