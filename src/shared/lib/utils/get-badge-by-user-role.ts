export const getBadgeByUserRole = (role: string) => {
	switch (role) {
		case 'student':
			return 'Ученик'
		case 'teacher':
			return 'Учитель'
		case 'admin':
			return 'Админ'
		default:
			return 'Ученик'
	}
}
