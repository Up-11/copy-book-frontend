'use client'

import { LoginProviders } from './login-providers'
import { RegisterPrimitive } from '@/entities/auth'
import { routes } from '@/shared/config/routes'
import {
	useCreateUserMutation,
	UserRole
} from '@/shared/graphql/generated/output'
import {
	createAccountSchema,
	TypeCreateAccountSchema
} from '@/shared/schemas/auth/create-account.schema'
import { Separator } from '@/shared/ui/view/separator'
import Text from '@/shared/ui/view/text'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const RegisterForm: React.FC<{
	currentUserRole: UserRole | null
}> = ({ currentUserRole }) => {
	const form = useForm<TypeCreateAccountSchema>({
		defaultValues: {
			firstName: 'Булат',
			lastName: 'Kadiev',
			email: 'iurykolgin@gmail.com',
			passwordRepeat: '123123123',
			password: '123123123',
			role: currentUserRole!
		},
		resolver: zodResolver(createAccountSchema),
		mode: 'onSubmit'
	})
	const router = useRouter()

	const [create, { loading }] = useCreateUserMutation({
		onCompleted() {
			toast.success(
				'Аккаунт успешно создан, пожалуйста, подтвердите свою почту'
			)
			router.push(routes.auth.verifyEmail)
		},
		onError(error) {
			toast.error(error.message)
		}
	})
	const onSubmit = (data: TypeCreateAccountSchema) => {
		create({
			variables: {
				data: {
					email: data.email,
					password: data.password,
					role: data.role,
					firstName: data.firstName,
					lastName: data.lastName
				}
			}
		})
	}

	return (
		<FormProvider {...form}>
			<div className='flex items-center justify-center'>
				<div className='rounded-2xl p-layout px-1 max-md:w-full md:w-[420px] md:px-10'>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col gap-6'
					>
						<RegisterPrimitive isLoading={loading} />
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
					<LoginProviders onClickVk={() => {}} onClickYandex={() => {}} />
				</div>
			</div>
		</FormProvider>
	)
}
