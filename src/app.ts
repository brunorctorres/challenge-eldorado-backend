import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'

dotenv.config()

const app = express()

app.use(express.json())

app.use(routes)
app.use('/api', routes) // base endpoint

export default app
