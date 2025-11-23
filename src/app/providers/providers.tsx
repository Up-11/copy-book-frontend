import { ApolloClientProvider } from './apollo-client-provider'
import { AuthProvider } from './auth-provider'
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

					{children}
					<Toaster position='bottom-right' closeButton duration={3000} />
				</AuthProvider>
			</ApolloClientProvider>
		</>
	)
}
