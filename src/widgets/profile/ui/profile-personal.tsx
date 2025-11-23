'use client'

import {
	UpdateUserInfoInput,
	useFindProfileQuery,
	useUpdateUserInfoMutation
} from '@/shared/graphql/generated/output'
import { getFirstTwoLetters } from '@/shared/lib/utils'
import {
	personalDataSchema,
	TypePersonalDataSchema
} from '@/shared/schemas/profile/personal-data-schema'
import { useAuthStore } from '@/shared/store/auth-store'
import { UiAvatar } from '@/shared/ui/custom/ui-avatar'
import { FormInput } from '@/shared/ui/forms/form-input'
import { FormTextarea } from '@/shared/ui/forms/form-textarea'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/ui/modals/dropdown-menu'
import { Button } from '@/shared/ui/other/button'
import Text from '@/shared/ui/view/text'
import { TitleWithSeparator } from '@/shared/ui/view/title-with-separator'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const ProfilePersonal: React.FC = () => {
	const { data, loading, refetch } = useFindProfileQuery()
	const setFirstName = useAuthStore(state => state.setFirstName)
	const setLastName = useAuthStore(state => state.setLastName)
	const [updateUserInfo] = useUpdateUserInfoMutation({
		async onCompleted() {
			toast.success('Личная информация успешно обновлена')
			refetch()

			setFirstName(form.getValues('firstName'))
			setLastName(form.getValues('lastName'))
		},
		onError(error) {
			toast.error(error.message)
		}
	})

	const user = data?.findProfile

	const form = useForm<TypePersonalDataSchema>({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			bio: '',
			avatar: ''
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
				bio: user.bio || '',
				avatar: user.avatar || ''
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
				<div className='relative max-h-[220px]'>
					<UiAvatar
						className='size-[220px] text-7xl'
						avatarUrl={user?.avatar}
						fallbackText={getFirstTwoLetters(
							`${user?.firstName} ${user?.lastName}`
						)}
					/>
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger
							asChild
							className='absolute bottom-7 flex items-center gap-2'
						>
							<Button size='sm' variant={'secondary'}>
								Изменить
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent side='left'>
							<DropdownMenuGroup>
								<DropdownMenuItem className='hover:bg-gray-100'>
									Обновить фото
								</DropdownMenuItem>
								<DropdownMenuItem className='hover:bg-gray-100'>
									Удалить фото
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</section>
		</FormProvider>
	)
}
