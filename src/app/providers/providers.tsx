import { Toaster } from '@/shared/ui/view/toaster'
import NextTopLoader from 'nextjs-toploader'

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NextTopLoader
				color='#6366f1'
				showSpinner={false}
				initialPosition={0.08}
			/>

			{children}
			<Toaster />
		</>
	)
}
