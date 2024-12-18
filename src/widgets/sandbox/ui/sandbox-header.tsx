import React from 'react'
import { UiAvatar } from '@/shared/ui/custom/ui-avatar'
import { Button } from '@/shared/ui/other/button'
import { IconDropdownTrigger } from './icon-dropdown-trigger'
import { DraftTitle } from './draft-title'
import { UiDropdownMenu } from '@/shared/ui/custom/ui-dropdown-menu'
import { SettingsCodeEditor } from '@/features/code-editor'

export const SandboxHeader: React.FC = () => {
	return (
		<header className='flex items-center justify-between border-b border-b-zinc-700 px-layout pb-1'>
			<div className='flex w-6/12'>
				<UiDropdownMenu
					label='Настройки'
					className='ml-2 border-transparent bg-zinc-800 text-white'
					items={<SettingsCodeEditor />}
				>
					<IconDropdownTrigger />
				</UiDropdownMenu>
			</div>
			<div className='relative flex w-6/12 items-center'>
				<DraftTitle />
			</div>
			<div className='flex w-6/12 items-center justify-end'>
				<div className='flex gap-2'>
					<UiAvatar className='h-8 w-8' />
					<Button
						size={'sm'}
						variant={'outline'}
						className='hover:bg-primary/40 hover:text-white'
					>
						Поделиться
					</Button>
				</div>
			</div>
		</header>
	)
}
