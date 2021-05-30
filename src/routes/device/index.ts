import { Router } from 'express'
import DeviceController from '../../controllers/DeviceController'

const devicesRoutes = Router()

devicesRoutes.get('/', DeviceController.find)
devicesRoutes.post('/', DeviceController.save)
devicesRoutes.delete('/:id', DeviceController.delete)

export default devicesRoutes
