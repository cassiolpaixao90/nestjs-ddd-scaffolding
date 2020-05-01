import { Module, Global } from '@nestjs/common';
import { DatabaseModule } from 'src/infraestructure/database';

const IMPORTS = [DatabaseModule];
const EXPORTS = [DatabaseModule];

@Global()
@Module({
	imports: [...IMPORTS],
	exports: [...EXPORTS]
})
export class InfraModule {}
