import type { Application } from '../models/Application';

export interface ApplicationRepository {
	getApplication: () => Promise<Application | null>
	updateApplication: (data: Partial<Application>) => Promise<void>
}
