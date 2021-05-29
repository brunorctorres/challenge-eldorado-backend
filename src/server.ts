import app from './app'
import connection from './typeorm'

const port = process.env.APP_PORT || 3000

connection
	.then(async () => {
		console.log('📦 Connected to AWS RDS Database!')
		app.listen(port, () => {
			console.log(`App listening at ${port}`)
		})
	})
	.catch((error) => {
		console.log(error)
	})
