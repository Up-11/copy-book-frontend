export enum UserRole {
	ADMIN = 'admin',
	STUDENT = 'student',
	TEACHER = 'teacher',
	NO_ROLE = 'no role'
}

export const isUserRole = (value: string): value is UserRole => {
	return ['admin', 'student', 'teacher'].includes(value)
}
