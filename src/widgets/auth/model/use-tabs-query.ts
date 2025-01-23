import { useQueryManager } from '@/common/query'
import { useEffect, useState } from 'react'
import { useUnmount } from 'usehooks-ts'

export const useTabsQuery = () => {
	const [currentTab, setCurrentTab] = useState('login')
	const { getQueryValue, updateQuery } = useQueryManager()

	const handleTabChange = (tab: string) => {
		setCurrentTab(tab)
		updateQuery({ tab })
	}

	useEffect(() => {
		const tab = getQueryValue('tab', currentTab)

		// Приведение типа: используем первое значение, если `tab` — это массив
		const resolvedTab = Array.isArray(tab) ? tab[0] : tab

		setCurrentTab(resolvedTab || 'login')
		updateQuery({ tab: resolvedTab || 'login' })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useUnmount(() => {
		updateQuery({ tab: undefined })
	})

	return {
		handleTabChange,
		currentTab
	}
}
