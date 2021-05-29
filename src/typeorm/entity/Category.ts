import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm'
import { Device } from './Device'

@Entity('Types')
export class Category {
	@PrimaryGeneratedColumn()
	Id: number

	@Column()
	Name: string

	@OneToMany(() => Device, (Device) => Device.Category)
	Device: Device[]
}
