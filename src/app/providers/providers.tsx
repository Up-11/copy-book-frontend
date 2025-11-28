import { ApolloClientProvider } from './apollo-client-provider'
import { AuthProvider } from './auth-provider'
import { ThemeProvider } from './theme-provider'
import { TooltipProvider } from '@/shared/ui/view/tooltip'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'sonner'

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ApolloClientProvider>
				<AuthProvider>
					<NextTopLoader
						color='#6366f1'
						showSpinner={false}
						initialPosition={0.08}
					/>
					<TooltipProvider delayDuration={100}>
						<ThemeProvider
							attribute={'class'}
							defaultTheme='light'
							disableTransitionOnChange
						>
							{children}
						</ThemeProvider>
					</TooltipProvider>
					<Toaster position='bottom-right' closeButton duration={3000} />
				</AuthProvider>
			</ApolloClientProvider>
		</>
	)
}
