import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { UserRepository } from 'src/application';

@ValidatorConstraint({ name: 'isUserAlreadyExist', async: true })
@Injectable()
export class IsUserAlreadyExist implements ValidatorConstraintInterface {
	constructor(private readonly userRepository: UserRepository) {}

	public async validate(email: string) {
		const user = await this.userRepository.findByEmail(email);
		return !user;
	}

	public defaultMessage() {
		return 'User with this email already exists.';
	}
}
