export class Routes {
	home = '/'

	auth = 'auth'

	student = 'student'
	teacher = 'teacher'
	admin = 'admin'

	main = 'main'

	//* AUTH
	studentAuth = `/${this.auth}/${this.student}`
	teacherAuth = `/${this.auth}/${this.teacher}`
	adminAuth = `/${this.auth}/${this.admin}/login`

	resetPassword = `${this.auth}/reset-password`

	//* MAIN
	mainStudent = `/${this.main}/${this.student}`
	mainTeacher = `/${this.main}/${this.teacher}`
	mainAdmin = `/${this.main}/${this.admin}`
}
export const routes = new Routes()
