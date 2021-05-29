import { Repository, getRepository } from 'typeorm'
import { Device } from '../typeorm/entity/Device'

export default class DeviceController {
	private repository: Repository<Device>

	constructor() {
		this.repository = getRepository(Device)
	}

	public async find(): Promise<{ ok: boolean; devices?: Device[] }> {
		try {
			const devices = await this.repository.find()
			return { ok: true, devices }
		} catch (error) {
			console.log(error)
			return { ok: false }
		}
	}

	public async save(device: Device): Promise<{ ok: boolean }> {
		try {
			await this.repository.save(device)
			return { ok: true }
		} catch (error) {
			console.log(error)
			return { ok: false }
		}
	}

	public async remove(device: Device): Promise<{ ok: boolean }> {
		try {
			await this.repository.remove(device)
			return { ok: true }
		} catch (error) {
			console.log(error)
			return { ok: false }
		}
	}
}
