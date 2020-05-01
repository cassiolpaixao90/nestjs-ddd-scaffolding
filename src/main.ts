import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { ExceptionErrorFilter, LoggingInterceptor, ValidationPipe } from 'src/infraestructure';

declare const module: any;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalFilters(new ExceptionErrorFilter());
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalInterceptors(new LoggingInterceptor());
	await app.listen(3000);

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
}
bootstrap();
