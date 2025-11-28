'use client'

import { Button } from '@/shared/ui/other/button'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/shared/ui/view/tooltip'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

export function SwitchColorTheme() {
	const { setTheme, theme } = useTheme()

	const isLight = theme === 'light'

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				{isLight ? (
					<Button
						variant='outline'
						size='icon'
						onClick={() => setTheme('dark')}
					>
						<Sun className='h-4 w-4 rotate-0 scale-100 transition-all' />
					</Button>
				) : (
					<Button
						variant='outline'
						size='icon'
						onClick={() => setTheme('light')}
					>
						<Moon className='h-4 w-4 rotate-0 scale-100 transition-all' />
					</Button>
				)}
			</TooltipTrigger>

			<TooltipContent side='bottom'>
				<p>{isLight ? 'Темная тема' : 'Светлая тема'}</p>
			</TooltipContent>
		</Tooltip>
	)
}
