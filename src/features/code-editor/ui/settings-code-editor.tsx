'use client'
import React from 'react'
import {
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger
} from '@/shared/ui/modals/dropdown-menu'
import { SquareCode } from 'lucide-react'
import Link from 'next/link'
import { routes } from '@/shared/config/routes'
import { ScrollArea } from '@/shared/ui/other/scroll-area'
import { LanguageSettings } from './language-settings'
import { useLanguage } from '../model/use-language'
import { SettingsSearch } from './settings-search'

export const SettingsCodeEditor: React.FC = () => {
	const { setLanguage, updatedLanguageOptions } = useLanguage()
	return (
		<>
			<DropdownMenuSub>
				<DropdownMenuSubTrigger className='bg-zinc-800 hover:bg-zinc-700'>
					<SquareCode />
					Язык
				</DropdownMenuSubTrigger>
				<DropdownMenuPortal>
					<DropdownMenuSubContent className='ml-1 border-transparent bg-zinc-800 text-sm text-white'>
						<ScrollArea>
							<div className='h-[200px] w-[250px] p-2'>
								<SettingsSearch />
								<div className='m-2'>
									<ul>
										<LanguageSettings
											onClick={setLanguage}
											languageOptions={updatedLanguageOptions}
										/>
									</ul>
								</div>
							</div>
						</ScrollArea>
					</DropdownMenuSubContent>
				</DropdownMenuPortal>
			</DropdownMenuSub>
			<DropdownMenuSeparator className='bg-zinc-600' />
			<DropdownMenuItem className='bg-zinc-800 hover:bg-zinc-700'>
				<Link href={routes.dashboard.student}>Выйти из песочницы</Link>
			</DropdownMenuItem>
		</>
	)
}
