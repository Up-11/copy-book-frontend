export type languageOptionsType = {
	id: number
	name: string
	label: string
	value: string
	isActive?: boolean
}
export interface CompileStatus {
	id: number
	description: string
}

export interface OutputDetails {
	stdout: string | null
	stderr: string | null
	compile_output: string | null
	message?: string
	status: CompileStatus
	memory: number
	time: string
	token: string
}

export type OutputDetailsNullable = OutputDetails | null
