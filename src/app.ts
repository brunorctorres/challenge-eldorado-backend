import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes'

dotenv.config()

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use('/api', routes) // base endpoint

export default app
