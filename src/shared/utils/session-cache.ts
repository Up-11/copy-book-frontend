class SessionCache {
	private cache = new Map<string, { data: unknown; timestamp: number }>()
	private readonly TTL = 5 * 60 * 1000

	get(sessionToken: string) {
		const item = this.cache.get(sessionToken)
		if (!item) return null

		if (Date.now() - item.timestamp > this.TTL) {
			this.cache.delete(sessionToken)
			return null
		}

		return item.data
	}

	set(sessionToken: string, data: unknown) {
		this.cache.set(sessionToken, {
			data,
			timestamp: Date.now()
		})
	}

	delete(sessionToken: string) {
		this.cache.delete(sessionToken)
	}

	cleanup() {
		const now = Date.now()
		for (const [key, value] of this.cache.entries()) {
			if (now - value.timestamp > this.TTL) {
				this.cache.delete(key)
			}
		}
	}
	getTimeLeft(sessionToken: string): number {
		const item = this.cache.get(sessionToken)
		if (!item) return 0

		const timePassed = Date.now() - item.timestamp
		return Math.max(0, this.TTL - timePassed)
	}
}

export const sessionCache = new SessionCache()
