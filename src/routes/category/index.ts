import { Router } from 'express'
import CategoryController from '../../controllers/CategoryController'

const categoriesRoutes = Router()

categoriesRoutes.get('/', CategoryController.find)
categoriesRoutes.post('/', CategoryController.save)
categoriesRoutes.delete('/:id', CategoryController.delete)

export default categoriesRoutes
