export const encodeCode = (code: string): string => {
	try {
		return btoa(unescape(encodeURIComponent(code)))
	} catch {
		return code
	}
}
