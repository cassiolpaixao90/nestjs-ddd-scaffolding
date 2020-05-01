import { Injectable } from '@nestjs/common';
import { AppService } from 'src/domain';

@Injectable()
export class AppUseCase {
	constructor(private appService: AppService) {}

	getTitle(): string {
		return this.appService.getTitle();
	}
}
