import { Module, Global } from '@nestjs/common';
import { AppController } from 'src/interfaces';
import { ApplicationModule } from 'src/application';

const CONTROLLERS = [AppController];
const MODULES = [ApplicationModule];

@Global()
@Module({
	imports: [...MODULES],
	controllers: [...CONTROLLERS]
})
export class InterfaceModule {}
