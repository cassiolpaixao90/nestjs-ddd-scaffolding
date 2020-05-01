import { Module, Global } from '@nestjs/common';
import { AppService } from 'src/domain';

const EXPORTS = [AppService];
const PROVIDERS = [AppService];

@Global()
@Module({
	exports: [...EXPORTS],
	providers: [...PROVIDERS]
})
export class DomainModule {}
