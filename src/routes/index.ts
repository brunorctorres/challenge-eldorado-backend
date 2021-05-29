// import app from 'app'
import { Router } from 'express'
import categoryRoutes from './category'
import deviceRoutes from './device'

const routes = Router()

routes.use('/categories', categoryRoutes)
routes.use('/devices', deviceRoutes)

export default routes
