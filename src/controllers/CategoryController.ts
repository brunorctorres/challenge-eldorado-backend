import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Category } from '../typeorm/entity/Category'

export default class CategoryController {
	public static find = async (
		_req: Request,
		res: Response
	): Promise<Response> => {
		const repository = getRepository(Category)
		try {
			const categories = await repository.find()
			return res.json({ categories })
		} catch (error) {
			console.log(error)
			return res.status(500).json({ error: true })
		}
	}

	public static save = async (
		req: Request,
		res: Response
	): Promise<Response> => {
		const repository = getRepository(Category)
		const category = req.body
		try {
			const result = await repository.save(category)
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
		const repository = getRepository(Category)
		const category = req.params.id
		console.log(`category id: ${category}`)
		try {
			const result = await repository.delete(category)
			console.log(result)
			if (result.affected) return res.json({ removed: true })
			else
				return res.json({
					removed: false,
					message: 'category not found to remove',
				})
		} catch (error) {
			console.log(error)
			return res.status(500).json({ removed: false })
		}
	}
}
