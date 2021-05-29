// import app from 'app'
import { Router } from 'express'
import categoriesRoutes from './categories'
import devicesRoutes from './devices'

const routes = Router()

routes.use('/categories', categoriesRoutes)
routes.use('/devices', devicesRoutes)

export default routes
