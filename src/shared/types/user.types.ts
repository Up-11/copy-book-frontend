import { UserRole } from "../graphql/generated/output"

export enum VerificationStatus {
	PENDING = 'PENDING',
	VERIFIED = 'VERIFIED',
	FAILED = 'FAILED',
	NOT_STARTED = 'NOT_STARTED'
}

export const isUserRole = (value: string): value is UserRole => {
	return ['ADMIN', 'STUDENT', 'TEACHER'].includes(value)
}
