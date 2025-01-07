import { usePathname } from 'next/navigation'

export const useCurrentSidebarItem = () => {
	const pathname = usePathname()
	const currentPage = pathname?.split('/').pop()

	return { currentPage }
}
