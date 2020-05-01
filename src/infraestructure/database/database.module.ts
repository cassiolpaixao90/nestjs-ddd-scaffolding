import { Module } from '@nestjs/common';
import { DatabaseProviders, EntityProviders } from './provider';

const PROVIDERS = [...DatabaseProviders, ...EntityProviders];

@Module({
	providers: [...PROVIDERS],
	exports: [...PROVIDERS]
})
export class DatabaseModule {}
