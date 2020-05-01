import { Inject, Injectable } from '@nestjs/common';
import { UserModel } from 'src/domain';

@Injectable()
export class UserRepository {
	constructor(
		@Inject('USER_REPOSITORY')
		private readonly userRepository: typeof UserModel,
		@Inject('SequelizeInstance')
		private readonly sequelizeInstance
	) {}

	public async create(user: object): Promise<UserModel> {
		return await this.sequelizeInstance.transaction(async transaction => {
			const options = { transaction, returning: true };
			return await this.userRepository.create<UserModel>(user, options);
		});
	}

	public async findByEmail(email: string): Promise<UserModel> {
		return this.userRepository.findOne({
			where: {
				email
			}
		});
	}
}
