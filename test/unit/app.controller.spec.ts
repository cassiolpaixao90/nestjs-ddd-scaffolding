import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from 'src/interfaces';
import { AppUseCase } from 'src/application';
import { AppService } from 'src/domain';

describe('AppController', () => {
	let appController: AppController;
	let appUseCase: AppUseCase;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppUseCase, AppService]
		}).compile();

		appUseCase = app.get<AppUseCase>(AppUseCase);
		appController = app.get<AppController>(AppController);
	});

	describe('root', () => {
		it('should return "Hello World!"', () => {
			const result = 'test';
			jest.spyOn(appUseCase, 'getTitle').mockImplementation(() => result);

			expect(appController.getTitle()).toBe(result);
		});
	});
});
