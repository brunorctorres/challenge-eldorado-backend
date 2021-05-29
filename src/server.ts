import app from './app'
import connection from './typeorm'

const port = process.env.APP_PORT || 3000

connection
	.then(async () => {
		console.log('📦 Connected to database!')
		app.listen(port, () => {
			console.log(`App listening at http://localhost:${port}`)
		})
	})
	.catch((error) => {
		console.log(error)
	})
