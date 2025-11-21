import { VkIcon } from '@/shared/ui/icons/vk'
import Text from '@/shared/ui/view/text'
import Image from 'next/image'
import React from 'react'

export const LoginProviders: React.FC<{
	onClickYandex: () => void
	onClickVk: () => void
	isLoading: boolean
}> = ({ onClickVk, onClickYandex, isLoading }) => {
	return (
		<div className='flex flex-col gap-3 sm:gap-4'>
			<button
				onClick={onClickVk}
				disabled={isLoading}
				className='flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 transition-colors duration-200 hover:bg-blue-700'
			>
				<VkIcon color='white' className='h-6 w-6 sm:h-8 sm:w-8' />
				<Text color='white' size='small' className='text-base sm:text-lg'>
					Войти с VK ID
				</Text>
			</button>
			<button
				disabled={isLoading}
				onClick={onClickYandex}
				className='flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-black px-4 transition-colors duration-200 hover:bg-gray-800'
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
			</button>
		</div>
	)
}
