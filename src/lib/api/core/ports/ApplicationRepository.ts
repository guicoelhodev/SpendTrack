import type { Application } from '../models/Application';

export interface ApplicationRepository {
	getApplication: () => Promise<Application | null>
}
