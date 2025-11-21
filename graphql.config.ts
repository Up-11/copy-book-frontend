import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
	schema: process.env.NEXT_PUBLIC_SERVER_URL,
	documents: ['src/shared/graphql/**/*.graphql'],
	generates: {
		'src/shared/graphql/generated/output.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo'
			],
			config: {
				withHooks: true,
				apolloClientVersion: 4,
				apolloReactCommonImportFrom: '@apollo/client/react',
				apolloReactHooksImportFrom: '@apollo/client/react'
			}
		}
	},
	ignoreNoDocuments: true
}

export default config
