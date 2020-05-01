import { Controller, Get } from '@nestjs/common';
import { AppUseCase } from 'src/application';

@Controller()
export class AppController {
	constructor(private readonly appUseCase: AppUseCase) {}

	@Get()
	getTitle(): string {
		return this.appUseCase.getTitle();
	}
}
