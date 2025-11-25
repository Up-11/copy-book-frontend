'use client'

import { useRemoveAvatarMutation } from '@/shared/api/graphql/generated/output'
import { useUserDataSync } from '@/shared/hooks/use-sync-user-data'
import { useUploadFile } from '@/shared/hooks/use-upload-file'
import {
	avatarUploadSchema,
	TypeAvatarUploadSchema
} from '@/shared/schemas/common/upload-file.schema'
import { UiAvatar } from '@/shared/ui/custom/ui-avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/ui/modals/dropdown-menu'
import { Button } from '@/shared/ui/other/button'
import { Skeleton } from '@/shared/ui/other/skeleton'
import Text from '@/shared/ui/view/text'
import { getMediaSource } from '@/shared/utils/get-media-source'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const ChangeAvatar: React.FC<{
	fullName: string
}> = ({ fullName }) => {
	const { syncUserData, user } = useUserDataSync()
	const { uploadFile, isLoading } = useUploadFile(syncUserData)
	const [removeAvatar, { isLoading: isRemovingAvatar }] =
		useRemoveAvatarMutation({
			onCompleted: () => {
				syncUserData()
				toast.success('Аватар удален успешно')
			},
			onError: () => {
				toast.error('Ошибка удаления аватара')
			}
		})

	const inputRef = useRef<HTMLInputElement>(null)

	const { setValue } = useForm<TypeAvatarUploadSchema>({
		resolver: zodResolver(avatarUploadSchema),
		defaultValues: {
			file: getMediaSource(user?.avatar || '')
		}
	})

	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0]
		if (file) {
			await uploadFile(file)
			setValue('file', file)
		}
	}

	const handleUpdatePhoto = () => {
		inputRef.current?.click()
	}

	const handleDeletePhoto = async () => {
		await removeAvatar()
	}

	return (
		<div className='relative max-h-[220px]'>
			<form>
				<input
					type='file'
					ref={inputRef}
					className='hidden'
					accept='image/*'
					onChange={handleFileChange}
				/>
				{isLoading || isRemovingAvatar ? (
					<Skeleton className='size-[220px] rounded-full text-7xl' />
				) : (
					<UiAvatar
						className='size-[220px] text-7xl'
						avatarUrl={getMediaSource(user?.avatar ?? '')}
						fallbackText={fullName}
					/>
				)}
				<div className='flex flex-col gap-1'>
					<Text size='extraSmall'>
						• <span className='font-semibold'>Поддерживаемые форматы:</span>{' '}
						JPEG, JPG, PNG, GIF, WEBP
					</Text>
					<Text size='extraSmall'>
						• <span className='font-semibold'>Макс. размер файла:</span>
						{'  '}
						10 МБ
					</Text>
				</div>
				<DropdownMenu modal={false}>
					<DropdownMenuTrigger
						asChild
						className='absolute bottom-7 flex items-center gap-2'
					>
						<Button size='sm' variant={'secondary'} type='button'>
							Изменить
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent side='left'>
						<DropdownMenuGroup>
							<DropdownMenuItem
								className='hover:bg-gray-100'
								onClick={handleUpdatePhoto}
								disabled={isLoading}
							>
								Обновить фото
							</DropdownMenuItem>
							<DropdownMenuItem
								className='hover:bg-gray-100'
								onClick={handleDeletePhoto}
								disabled={isLoading}
							>
								Удалить фото
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</form>
		</div>
	)
}
