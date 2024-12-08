import React from 'react'
import Image from 'next/image'
import Text from '@/shared/ui/view/text'
import { VkIcon } from '@/shared/ui/icons/vk'

export const LoginProviders: React.FC<{
	onClickYandex: () => void
	onClickVk: () => void
}> = ({ onClickVk, onClickYandex }) => {
	return (
		<div className='flex flex-col gap-3 sm:gap-4'>
			<div
				onClick={onClickVk}
				className='w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 h-12 rounded-lg cursor-pointer flex items-center justify-center gap-2 px-4'
			>
				<VkIcon color='white' className='w-6 h-6 sm:w-8 sm:h-8' />
				<Text color='white' size='small' className='text-base sm:text-lg'>
					Войти с VK ID
				</Text>
			</div>
			<div
				onClick={onClickYandex}
				className='w-full bg-black hover:bg-gray-800 transition-colors duration-200 h-12 rounded-lg flex items-center justify-center gap-2 px-4 cursor-pointer'
			>
				<div className='h-6 w-6 sm:h-8 sm:w-8'>
					<Image
						src='/assets/icons/yandex.svg'
						width={100}
						height={100}
						alt='yandex'
					/>
				</div>
				<Text color='white' size='small' className='text-base sm:text-lg'>
					Войти с Яндекс ID
				</Text>
			</div>
		</div>
	)
}
