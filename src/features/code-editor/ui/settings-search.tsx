import { Input } from '@/shared/ui/input/input'
import { Label } from '@/shared/ui/input/label'
import React from 'react'
import { useSearch } from '../model/use-search'
import { useUnmount } from 'usehooks-ts'

export const SettingsSearch: React.FC = () => {
	const { setSearchTerm } = useSearch()
	useUnmount(() => {
		setSearchTerm('')
	})
	//TODO крестик добавить
	return (
		<div>
			<Label>Поиск</Label>
			<Input
				onChange={e => setSearchTerm(e.target.value)}
				className='border border-zinc-500 text-xs placeholder:text-zinc-400'
				placeholder='Например "JavaScript"'
			/>
		</div>
	)
}
