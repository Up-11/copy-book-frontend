import React from 'react'
import { SettingsItem } from './settings-item'
import { languageOptionsType } from '../types'
import { useSearch } from '../model/use-search'

export const LanguageSettings: React.FC<{
	onClick: (item: languageOptionsType) => void
	languageOptions: languageOptionsType[]
}> = ({ onClick, languageOptions }) => {
	const { debouncedSearchTerm } = useSearch()
	return (
		<>
			{[...languageOptions]
				.filter(item =>
					item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
				)
				.sort((a, b) => Number(b.isActive) - Number(a.isActive))
				.sort((a, b) => Number(b.isActive) - Number(a.isActive))
				.map(item => (
					<SettingsItem
						key={item.id}
						type='lang'
						title={item.name}
						onClick={() => onClick(item)}
						isActive={item.isActive}
					/>
				))}
		</>
	)
}
