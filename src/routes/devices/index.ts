import { Router } from 'express'

const devicesRoutes = Router()

devicesRoutes.get('/', (req, res) => {
	return res.json({ list: true })
})

devicesRoutes.post('/', (req, res) => {
	console.log(req.body)
	return res.json({ created: true })
})

devicesRoutes.delete('/', (req, res) => {
	console.log(req.body)
	return res.json({ deleted: true })
})

export default devicesRoutes
