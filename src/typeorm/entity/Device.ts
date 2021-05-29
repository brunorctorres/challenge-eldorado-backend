import {
	Column,
	PrimaryGeneratedColumn,
	Entity,
	JoinColumn,
	ManyToOne,
} from 'typeorm'

import { Category } from './Category'

@Entity('Devices')
export class Device {
	@PrimaryGeneratedColumn()
	Id: number

	@ManyToOne(() => Category, (Category) => Category.Id, { eager: true })
	@JoinColumn({ name: 'Category' })
	Category: Category

	@Column()
	Color: string

	@Column()
	partNumber: number
}
