import {
	Table,
	Column,
	Model,
	DataType,
	AllowNull,
	AutoIncrement,
	PrimaryKey,
} from 'sequelize-typescript'

@Table({
	modelName: 'tasks',
	timestamps: false,
})
export default class Task extends Model {
	@AllowNull(false)
	@AutoIncrement
	@PrimaryKey
	@Column
	id: number

	@Column(DataType.TEXT)
	content: string

	@Column
	done: boolean
}
