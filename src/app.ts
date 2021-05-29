import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'

dotenv.config()

const port = process.env.APP_PORT || 3000
const app = express()

app.use(express.json())

app.use(routes)
app.use('/api', routes) // base endpoint

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})

export default app
