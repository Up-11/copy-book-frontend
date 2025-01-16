import { usePathname } from 'next/navigation'

export const useLastPathnameElement = () => {
	const pathname = usePathname()
	const currentPage = pathname?.split('/').pop()

	return { currentPage }
}
