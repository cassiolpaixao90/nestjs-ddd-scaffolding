import { Module, Global } from '@nestjs/common';
import { DomainModule } from 'src/domain';
import { AppUseCase, UserRepository } from 'src/application';

const EXPORTS = [AppUseCase, UserRepository];
const PROVIDERS = [AppUseCase, UserRepository];
const MODULES = [DomainModule];

@Global()
@Module({
	imports: [...MODULES],
	exports: [...EXPORTS],
	providers: [...PROVIDERS]
})
export class ApplicationModule {}
