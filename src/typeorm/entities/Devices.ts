import {
	Column,
	PrimaryGeneratedColumn,
	Entity,
	JoinTable,
	ManyToOne,
} from 'typeorm'
import { Types } from './Types'

@Entity()
export class Devices {
	@PrimaryGeneratedColumn()
	Id: number

	// @ManyToOne((type) => Types)
	@ManyToOne(() => Types)
	@JoinTable()
	Category: Types

	@Column()
	Color: string

	@Column()
	partNumber: number
}
