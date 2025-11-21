import { useQueryManager, useQueryStore } from '@/common/query'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useStep } from 'usehooks-ts'

export function useStepWithQuery(maxSteps: number) {
	const router = useRouter()
	const searchParams = useSearchParams()
	const [currentStep, helpers] = useStep(maxSteps)

	useEffect(() => {
		const params = new URLSearchParams(searchParams.toString())

		params.set('step', currentStep.toString())

		history.pushState(null, '', `?${params.toString()}`)
	}, [currentStep, router, searchParams])

	useEffect(() => {
		const stepParam = searchParams.get('step')
		if (stepParam) {
			const step = parseInt(stepParam)
			if (!isNaN(step) && step >= 1 && step <= maxSteps) {
				helpers.setStep(step)
			}
		}
	}, [])

	return [currentStep, helpers] as const
}
