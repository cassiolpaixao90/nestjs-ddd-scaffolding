import { Module, Global } from '@nestjs/common';
import { AppController, AuthController } from 'src/interfaces';
import { IsUserAlreadyExist } from 'src/interfaces';

const CONTROLLERS = [AppController, AuthController];
const PROVIDERS = [IsUserAlreadyExist];

@Global()
@Module({
	controllers: [...CONTROLLERS],
	providers: [...PROVIDERS]
})
export class InterfaceModule {}
