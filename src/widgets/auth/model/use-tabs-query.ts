import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

export const useTabsQuery = () => {
	const [currentTab, setCurrentTab] = useState('')
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		if (searchParams) {
			const tab = searchParams.get('t') || 'login'
			setCurrentTab(tab)

			const updatedSearchParams = new URLSearchParams(searchParams.toString())
			updatedSearchParams.set('t', tab)

			router.replace(`${pathname}?${updatedSearchParams.toString()}`)
		}
	}, [pathname, searchParams, router])

	const handleTabChange = (value: string) => {
		setCurrentTab(value)

		if (searchParams) {
			const updatedSearchParams = new URLSearchParams(searchParams.toString())
			updatedSearchParams.set('t', value)

			router.replace(`${pathname}?${updatedSearchParams.toString()}`)
		}
	}

	return {
		handleTabChange,
		currentTab,
	}
}
