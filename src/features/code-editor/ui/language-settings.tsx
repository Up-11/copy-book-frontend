import { useSearch } from '../model/use-search'
import { languageOptionsType } from '../types'
import { SettingsItem } from './settings-item'
import React from 'react'

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
