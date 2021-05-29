import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'

@Entity()
export class Types {
	@PrimaryGeneratedColumn()
	Id: number

	@Column()
	Name: string
}
