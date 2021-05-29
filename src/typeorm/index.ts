import 'reflect-metadata'

import {
	createConnection,
	getConnectionOptions,
	Connection,
	ConnectionOptions,
} from 'typeorm'

export class DatabaseConnection {
	private defaultOptions: ConnectionOptions

	public async startConnection(
		name = 'challenge-eldorado'
	): Promise<Connection> {
		this.defaultOptions = await getConnectionOptions()

		Object.assign(this.defaultOptions, {
			// entities: ['./dist/typeorm/entities/*.js'],
			entities: ['./dist/typeorm/entities/**/*.js'],
			migrations: ['./dist/typeorm/migrations/*.js'],
			cli: {
				// entitiesDir: './dist/typeorm/entities/',
				entitiesDir: './dist/typeormentities/**/',
				migrationsDir: './dist/typeorm/migrations/',
			},
		})

		return createConnection(
			Object.assign(this.defaultOptions, {
				name,
				database: process.env.DATABASE_NAME,
			})
		)
	}
}
