import { UserModel } from 'src/domain';

export const EntityProviders = [
	{
		provide: 'USER_REPOSITORY',
		useValue: UserModel
	}
];
