import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Device } from '../typeorm/entity/Device'

export default class DeviceController {
	public static find = async (
		_req: Request,
		res: Response
	): Promise<Response> => {
		const repository = getRepository(Device)
		try {
			const devices = await repository.find()
			return res.json({ devices })
		} catch (error) {
			console.log(error)
			return res.status(500).json({ error: true })
		}
	}

	public static save = async (
		req: Request,
		res: Response
	): Promise<Response> => {
		const repository = getRepository(Device)
		const device = req.body
		try {
			const result = await repository.save(device)
			console.log(result)
			return res.json({ created: true })
		} catch (error) {
			console.log(error)
			return res.status(500).json({ created: false })
		}
	}

	public static delete = async (
		req: Request,
		res: Response
	): Promise<Response> => {
		const repository = getRepository(Device)
		const device = req.params.id
		console.log(`device id: ${device}`)
		try {
			const result = await repository.delete(device)
			console.log(result.affected)
			if (result.affected) return res.json({ removed: true })
			else
				return res.json({
					removed: false,
					message: 'device not found to remove',
				})
		} catch (error) {
			console.log(error)
			return res.status(500).json({ removed: false })
		}
	}
}
