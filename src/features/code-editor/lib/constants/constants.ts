export const javascriptDefault =
	'const helloworld = () => {\n  console.log("Hello World!");\n};\n\nhelloworld();\n'

export const statuses = [
	{
		id: 1,
		description: 'В очереди'
	},
	{
		id: 2,
		description: 'Обработка'
	},
	{
		id: 3,
		description: 'Принято'
	},
	{
		id: 4,
		description: 'Неправильный ответ'
	},
	{
		id: 5,
		description: 'Превышено ограничение времени'
	},
	{
		id: 6,
		description: 'Ошибка компиляции'
	},
	{
		id: 7,
		description: 'Ошибка времени выполнения (SIGSEGV)'
	},
	{
		id: 8,
		description: 'Ошибка времени выполнения (SIGXFSZ)'
	},
	{
		id: 9,
		description: 'Ошибка времени выполнения (SIGFPE)'
	},
	{
		id: 10,
		description: 'Ошибка времени выполнения (SIGABRT)'
	},
	{
		id: 11,
		description: 'Ошибка времени выполнения (NZEC)'
	},
	{
		id: 12,
		description: 'Ошибка времени выполнения (другая)'
	},
	{
		id: 13,
		description: 'Внутренняя ошибка'
	},
	{
		id: 14,
		description: 'Ошибка формата выполнения'
	}
]
export const API_REDIS_CONFIG = {
	url: process.env.NEXT_PUBLIC_RAPID_API_URL,
	host: process.env.NEXT_PUBLIC_RAPID_API_HOST,
	key: process.env.NEXT_PUBLIC_RAPID_API_KEY
}
