'use client'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { LoginPrimitive } from '@/entities/auth'
import { Separator } from '@/shared/ui/view/separator'
import Text from '@/shared/ui/view/text'
import { LoginProviders } from './login-providers'

export const LoginStudent: React.FC = () => {
	const form = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		mode: 'onSubmit',
	})

	const onSubmit = (data: unknown) => {
		console.log('Form Data:', data)
	}
	return (
		<FormProvider {...form}>
			<div className='flex justify-center items-center w-full  '>
				<div className=' p-layout px-1 md:px-10 rounded-2xl md:w-[420px] max-md:w-full   '>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col gap-6'
					>
						<LoginPrimitive />
					</form>

					<div className='my-6 relative'>
						<Text
							size='extraSmall'
							className='bg-white px-4 text-center absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 flex justify-center'
						>
							или
						</Text>
						<Separator />
					</div>
					<LoginProviders onClickVk={() => {}} onClickYandex={() => {}} />
				</div>
			</div>
		</FormProvider>
	)
}
