import { useParams } from 'next/navigation'

export const useParamsId = () => {
	const params = useParams()

	return { currentPage: params }
}
