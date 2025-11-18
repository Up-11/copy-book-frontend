'use client'

import { LoginProviders } from './login-providers'
import { LoginPrimitive } from '@/entities/auth'
import { useGetAllUsersQuery } from '@/shared/graphql/generated/output'
import { UserRole } from '@/shared/types/user.types'
import { Separator } from '@/shared/ui/view/separator'
import Text from '@/shared/ui/view/text'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export const LoginForm: React.FC<{ currentUserRole: UserRole | null }> = ({
	currentUserRole
}) => {
	const form = useForm({
		defaultValues: {
			email: '',
			password: '',
			role: currentUserRole
		},
		mode: 'onSubmit'
	})
	const { data } = useGetAllUsersQuery()
	// const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
	// 	variables: {
	// 		data: {
	// 			email: form.getValues('email'),
	// 			password: form.getValues('password'),
	// 			role: currentUserRole
	// 		}
	// 	}
	// })

	const onSubmit = (data: unknown) => {
		console.log('Form Data:', data)
		// loginUserMutation()
	}
	return (
		<FormProvider {...form}>
			<div className='flex w-full items-center justify-center'>
				<div className='rounded-2xl p-layout px-1 max-md:w-full md:w-[420px] md:px-10'>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col gap-6'
					>
						<LoginPrimitive />
					</form>
					{/* {loading && <div>Loading...</div>}
					{error && <div>Error...{error}</div>}
					{data && <div>{data}</div>} */}
					{data && <div>{data.getAllUsers.map(user => user.email)}</div>}
					<div className='relative my-6'>
						<Text
							size='extraSmall'
							className='absolute -bottom-2.5 left-1/2 flex -translate-x-1/2 transform justify-center bg-white px-4 text-center'
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
