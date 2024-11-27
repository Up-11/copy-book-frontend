import { Toaster } from '@/shared/ui/view/toaster'

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children} <Toaster />
		</>
	)
}
