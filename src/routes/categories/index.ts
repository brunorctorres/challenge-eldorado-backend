import { Router } from 'express'

const categoriesRoutes = Router()

categoriesRoutes.get('/', (req, res) => {
	return res.json({ list: true })
})

categoriesRoutes.post('/', (req, res) => {
	console.log(req.body)
	return res.json({ created: true })
})

categoriesRoutes.delete('/', (req, res) => {
	console.log(req.body)
	return res.json({ deleted: true })
})

export default categoriesRoutes
