'use client'

import { LoginProviders } from './login-providers'
import { LoginPrimitive } from '@/entities/auth'
import {
	useLoginUserMutation,
	UserRole
} from '@/shared/api/graphql/generated/output'
import { getDashboardRoute } from '@/shared/config/routes'
import {
	loginSchema,
	TypeLoginSchema
} from '@/shared/schemas/auth/login-schema'
import { useAuthStore } from '@/shared/store/auth-store'
import { Separator } from '@/shared/ui/view/separator'
import Text from '@/shared/ui/view/text'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const LoginForm: React.FC<{ currentUserRole: UserRole | null }> = ({
	currentUserRole
}) => {
	const router = useRouter()
	const setUserInfo = useAuthStore(state => state.setUserInfo)
	const [token, setToken] = useState('')
	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
			role: currentUserRole!
		},
		mode: 'onSubmit'
	})
	const [login, { loading }] = useLoginUserMutation({
		onCompleted(data) {
			toast.success('Вход выполнен успешно')
			const link = getDashboardRoute(data.login.role)
			setUserInfo({
				firstName: data.login.firstName,
				lastName: data.login.lastName,
				email: data.login.email,
				role: data.login.role,
				avatar: data.login.avatar,
				isAuth: true
			})

			router.push(link)
		},
		onError(error) {
			toast.error(error.message)
		}
	})

	const onSubmit = (data: TypeLoginSchema) => {
		console.log('Form Data:', data)
		login({
			variables: {
				data: {
					email: form.getValues('email'),
					password: form.getValues('password'),
					role: currentUserRole!
				}
			}
		})
	}
	return (
		<FormProvider {...form}>
			<div className='flex w-full items-center justify-center'>
				<div className='rounded-2xl p-layout px-1 max-md:w-full md:w-[420px] md:px-10'>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col gap-6'
					>
						<LoginPrimitive
							isLoading={loading}
							setToken={setToken}
							token={token}
						/>
					</form>

					<div className='relative my-6'>
						<Text
							size='extraSmall'
							className='absolute -bottom-2.5 left-1/2 flex -translate-x-1/2 transform justify-center bg-white px-4 text-center'
						>
							или
						</Text>
						<Separator />
					</div>
					<LoginProviders
						onClickVk={() => {}}
						onClickYandex={() => {}}
						isLoading={loading}
					/>
				</div>
			</div>
		</FormProvider>
	)
}
