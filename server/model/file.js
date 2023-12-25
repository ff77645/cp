import { DataTypes } from 'sequelize'

export default {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	file_name:DataTypes.TEXT,
	link_path:DataTypes.TEXT,
	file_path:DataTypes.TEXT,
	path_hash:DataTypes.TEXT,
	tag:DataTypes.STRING,
	group:DataTypes.STRING,
}