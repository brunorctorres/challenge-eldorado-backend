import { Router } from 'express'
import DeviceController from '../../controllers/DeviceController'

const devicesRoutes = Router()

devicesRoutes.get('/', async (req, res) => {
	const deviceController = new DeviceController()
	return res.json(await deviceController.find())
})

devicesRoutes.post('/', async (req, res) => {
	const device = req.body
	const deviceController = new DeviceController()
	return res.json(await deviceController.save(device))
})

devicesRoutes.delete('/', async (req, res) => {
	const device = req.body
	const deviceController = new DeviceController()
	return res.json(await deviceController.remove(device))
})

export default devicesRoutes
