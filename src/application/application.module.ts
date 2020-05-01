import { Module, Global } from '@nestjs/common';
import { DomainModule } from 'src/domain';
import { AppUseCase } from 'src/application';

const EXPORTS = [AppUseCase];
const PROVIDERS = [AppUseCase];
const MODULES = [DomainModule];

@Global()
@Module({
	imports: [...MODULES],
	exports: [...EXPORTS],
	providers: [...PROVIDERS]
})
export class ApplicationModule {}
