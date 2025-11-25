import type { AxiosError } from 'axios'
import { useState, useCallback } from 'react'

interface UseMutationOptions<T, V> {
	mutationFn: (variables: V) => Promise<T>
	onSuccess?: (data: T) => void
	onError?: (error: Error) => void
}

export function useMutation<T, V>({
	mutationFn,
	onSuccess,
	onError
}: UseMutationOptions<T, V>) {
	const [data, setData] = useState<T | null>(null)
	const [error, setError] = useState<Error | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	const mutate = useCallback(
		async (variables: V) => {
			setIsLoading(true)
			setError(null)

			try {
				const result = await mutationFn(variables)
				setData(result)

				if (onSuccess) onSuccess(result)

				return result
			} catch (err) {
				const axiosError = err as AxiosError
				const errorMessage =
					(axiosError?.response?.data as any)?.message || 'Неизвестная ошибка'
				const error = new Error(errorMessage)

				setError(error)

				if (onError) {
					onError(error)
				}
			} finally {
				setIsLoading(false)
			}
		},
		[mutationFn, onSuccess, onError]
	)

	return {
		mutate,
		data,
		error,
		isLoading
	}
}
