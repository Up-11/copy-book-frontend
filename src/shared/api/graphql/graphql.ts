export async function getSessionData(sessionToken: string, sessionId: string) {
	const query = `
  query getBySessionId($data:SessionIdInput!){
  getSessionById(data:$data){
    role
  }
}
  `

	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Cookie: `cb-session=${sessionToken}`
			},
			body: JSON.stringify({
				query,
				variables: {
					data: {
						sessionId: sessionId
					}
				}
			})
		})

		const res = await response.json()
		return res.data || null
	} catch (error) {
		console.error('GraphQL error:', error)
		return null
	}
}
