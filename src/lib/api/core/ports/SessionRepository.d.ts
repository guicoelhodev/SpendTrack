import type { TSession } from "../models/Session"

export type TUpdateSession = Omit<TSession, 'id'>

export interface SessionRepository {
	updateSession: (sessionIndex: number, data: TUpdateSession) => Promise<void>
	deleteSession: (sessionIndex: number) => Promise<void>
	getSession: () => Promise<TSession | null>
}
