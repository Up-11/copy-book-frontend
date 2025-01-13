type DraftInfo = {
	name: string
	description: string
}
type DraftDates = {
	dateOfCreation: number
	dateOfLastModification: number
}
type CodeLines = number

export type Draft = {
	id: string
	codeLines: CodeLines
} & DraftInfo &
	DraftDates
