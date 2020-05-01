import { Controller, Post, Body } from '@nestjs/common';
import { AppUseCase } from 'src/application';

@Controller('/api/v1/auth')
export class AuthController {
	constructor(private readonly appUseCase: AppUseCase) {}

	@Post('signup')
	async signup() {
		const data = await this.appUseCase.getTitle();
		return data;
	}
}
