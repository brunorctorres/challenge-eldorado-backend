// export = {
// module.exports = {

export default {
	name: 'challenge-eldorado',
	type: 'mysql',
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
	synchronize: true,
	logging: false,
	entities: ['src/typeorm/entities/*.js'],
	subscribers: ['src/typeorm/subscribers/*.js'],
	migrations: ['src/typeorm/migrations/*.js'],
	cli: {
		entitiesDir: 'src/typeorm/entities',
		migrationsDir: 'src/typeorm/migrations',
		subscribersDir: 'src/typeorm/subscribers',
	},
}
