import { Toaster } from '@/shared/ui/toaster'

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children} <Toaster />
		</>
	)
}
