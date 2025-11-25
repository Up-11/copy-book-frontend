'use client'

import { ChangeAvatar } from '@/features/change-avatar/change-avatar'
import {
	UpdateUserInfoInput,
	useUpdateUserInfoMutation
} from '@/shared/api/graphql/generated/output'
import { useUserDataSync } from '@/shared/hooks/use-sync-user-data'
import { getFirstTwoLetters } from '@/shared/lib/utils'
import {
	personalDataSchema,
	TypePersonalDataSchema
} from '@/shared/schemas/profile/personal-data-schema'
import { FormInput } from '@/shared/ui/forms/form-input'
import { FormTextarea } from '@/shared/ui/forms/form-textarea'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import { TitleWithSeparator } from '@/shared/ui/view/title-with-separator'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const ProfilePersonal: React.FC = () => {
	const { user, loading, syncUserData: refetch } = useUserDataSync()
	const [updateUserInfo] = useUpdateUserInfoMutation({
		async onCompleted() {
			toast.success('Личная информация успешно обновлена')
			refetch()
		},
		onError(error) {
			toast.error(error.message)
		}
	})

	const form = useForm<TypePersonalDataSchema>({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			bio: ''
		},
		resolver: zodResolver(personalDataSchema),
		mode: 'onSubmit'
	})

	useEffect(() => {
		if (user) {
			form.reset({
				firstName: user.firstName || '',
				lastName: user.lastName || '',
				email: user.email || '',
				bio: user.bio || ''
			})
		}
	}, [user, form])

	const bio = form.getValues('bio')

	const onSubmit = (data: TypePersonalDataSchema) => {
		const dirtyFields = form.formState.dirtyFields

		const changedData: UpdateUserInfoInput = {}

		Object.keys(dirtyFields).forEach(key => {
			const field = key as keyof UpdateUserInfoInput
			if (dirtyFields[field]) {
				changedData[field] = data[field]
			}
		})

		if (Object.keys(changedData).length === 0) {
			return
		}

		updateUserInfo({
			variables: {
				data: { ...changedData }
			}
		})
	}
	return (
		<FormProvider {...form}>
			<TitleWithSeparator title='Личные данные' />
			<section className='mt-4 grid grid-cols-[75%_25%]'>
				<form
					className='flex w-4/6 flex-col gap-4'
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormInput
						label='Имя'
						type='text'
						name='firstName'
						hasClearButton={false}
						placeholder='Ваше имя'
						helpText='Указывается в личном кабинете и учебных материалах'
						disabled={loading}
					/>
					<FormInput
						label='Фамилия'
						type='text'
						name='lastName'
						hasClearButton={false}
						placeholder='Ваша Фамилия'
						helpText='Указывается в личном кабинете и учебных материалах'
						disabled={loading}
					/>
					<FormInput
						label='E-mail'
						type='text'
						name='email'
						disabled
						hasClearButton={false}
						placeholder='Ваша электронная почта'
						helpText='Используется для входа в аккаунт и получения уведомлений. Изменить можно в разделе "Безопасность"'
					/>
					<FormTextarea
						label='О вас '
						name='bio'
						id='bio'
						rows={5}
						placeholder='Краткое описание вас (до 500 символов)'
						helpText={`Напишите о ваших успехах и увлечениях (${bio?.length || 0}/500 символов)`}
					/>
					<div className='mt-2 flex items-center gap-4'>
						<Button disabled={!form.formState.isDirty}>
							Сохранить изменения
						</Button>

						{form.formState.isDirty && (
							<Text size='small'>Есть несохраненные изменения</Text>
						)}
					</div>
				</form>
				<ChangeAvatar
					fullName={getFirstTwoLetters(`${user?.firstName} ${user?.lastName}`)}
				/>
			</section>
		</FormProvider>
	)
}
