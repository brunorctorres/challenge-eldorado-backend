import { Router } from 'express'
import CategoryController from '../../controllers/CategoryController'

const categoriesRoutes = Router()

categoriesRoutes.get('/', async (_req, res) => {
	const categoryController = new CategoryController()
	return res.json(await categoryController.find())
})

categoriesRoutes.post('/', async (req, res) => {
	const category = req.body
	const categoryController = new CategoryController()
	return res.json(await categoryController.save(category))
})

categoriesRoutes.delete('/', async (req, res) => {
	const category = req.body
	const categoryController = new CategoryController()
	return res.json(await categoryController.remove(category))
})

export default categoriesRoutes
