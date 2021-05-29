import { Repository, getRepository } from 'typeorm'
import { Category } from '../typeorm/entity/Category'

export default class CategoryController {
	private repository: Repository<Category>

	constructor() {
		this.repository = getRepository(Category)
	}

	public async find(): Promise<{ ok: boolean; categories?: Category[] }> {
		try {
			const categories = await this.repository.find()
			return { ok: true, categories }
		} catch (error) {
			console.log(error)
			return { ok: false }
		}
	}

	public async save(category: Category): Promise<{ ok: boolean }> {
		try {
			await this.repository.save(category)
			return { ok: true }
		} catch (error) {
			console.log(error)
			return { ok: false }
		}
	}

	public async remove(category: Category): Promise<{ ok: boolean }> {
		try {
			await this.repository.remove(category)
			return { ok: true }
		} catch (error) {
			console.log(error)
			return { ok: false }
		}
	}
}
