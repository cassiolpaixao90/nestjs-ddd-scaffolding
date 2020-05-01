import { Injectable } from '@nestjs/common';
import { AppModel } from 'src/domain';

@Injectable()
export class AppService {
	getTitle(): string {
		const appModel = new AppModel();
		return appModel.title;
	}
}
