import { Sequelize } from 'sequelize-typescript';

export const DatabaseProviders = [
	{
		provide: 'SequelizeInstance',
		useFactory: async () => {
			const sequelize = new Sequelize({
				username: 'postgres',
				password: 'docker',
				database: 'gobarber',
				host: '127.0.0.1',
				port: 5432,
				dialect: 'postgres',
				logging: false,
				timezone: '+02:00',
				modelPaths: [__dirname + 'src/domain/model']
			});
			return sequelize;
		}
	}
];
