import * as crypto from 'crypto';
import {
	AutoIncrement,
	BeforeCreate,
	BeforeValidate,
	Column,
	CreatedAt,
	DataType,
	DeletedAt,
	Model,
	PrimaryKey,
	Table,
	UpdatedAt
} from 'sequelize-typescript';

@Table({
	tableName: 'users',
	timestamps: true
})
export class UserModel extends Model<UserModel> {
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.BIGINT)
	public id?: number;

	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	public firstName?: string;

	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	public lastName?: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
		validate: {
			isEmail: true,
			isUnique: async (value: string, next: any): Promise<any> => {
				const isExist = await UserModel.findOne({ where: { email: value } });
				if (isExist) {
					const error = new Error('The email is already used.');
					next(error);
				}
				next();
			}
		}
	})
	public email?: string;

	@Column({
		type: DataType.TEXT,
		allowNull: false
	})
	public password?: string;

	@Column({ type: DataType.DATEONLY })
	public birthday: Date;

	@CreatedAt
	public createdAt?: Date;

	@UpdatedAt
	public updatedAt?: Date;

	@DeletedAt
	public deletedAt?: Date;

	@BeforeValidate
	public static validateData(userModel: UserModel, options: any) {
		if (!options.transaction) throw new Error('Missing transaction.');
	}

	@BeforeCreate
	public static async hashPassword(userModel: UserModel, options: any) {
		if (!options.transaction) throw new Error('Missing transaction.');
		userModel.password = crypto.createHmac('sha256', userModel.password).digest('hex');
	}
}
