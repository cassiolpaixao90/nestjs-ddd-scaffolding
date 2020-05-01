import { Module, Global } from '@nestjs/common';
import { InterfaceModule } from 'src/interfaces';
import { ApplicationModule } from 'src/application';
import { DomainModule } from 'src/domain';
import { InfraModule } from 'src/infraestructure';

const APP_MODULES = [InfraModule, ApplicationModule, DomainModule, InterfaceModule];
@Global()
@Module({
	providers: [...APP_MODULES],
	imports: [...APP_MODULES],
	exports: [...APP_MODULES]
})
export class AppModule {}
