import { IconDropdownTrigger } from './icon-dropdown-trigger'
import { SettingsCodeEditor } from '@/features/code-editor'
import { RenamedTitle } from '@/shared/ui/custom/renamed-title'
import { UiAvatar } from '@/shared/ui/custom/ui-avatar'
import { UiDropdownMenu } from '@/shared/ui/custom/ui-dropdown-menu'
import { Button } from '@/shared/ui/other/button'
import React from 'react'

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
				<div className='absolute left-1/2 -translate-x-1/2'>
					<RenamedTitle />
				</div>
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
