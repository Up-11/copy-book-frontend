import { SessionItem } from './session-item'
import { FindSessionByUserQuery } from '@/shared/graphql/generated/output'

interface SessionListProps {
	sessions: FindSessionByUserQuery['findSessionByUser']
	refetchSessions?: () => void
}
export const SessionList = ({
	sessions,
	refetchSessions
}: SessionListProps) => {
	return (
		<div className='flex flex-col gap-1'>
			{sessions.map(session => (
				<SessionItem
					key={session.id}
					session={session}
					refetchSessions={refetchSessions}
				/>
			))}
		</div>
	)
}
