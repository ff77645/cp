import {Sequelize,DataTypes } from 'sequelize'
import {getConfig} from '../utils/index.js'
import {join} from 'path'


const storage = join(getConfig().store,'data/database.sqlite')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage
})

try {
  await sequelize.authenticate();
  console.log('数据库连接成功.');
} catch (error) {
  console.error('数据库连接失败.', error);
}

export const File = sequelize.define('File', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  file_name:DataTypes.TEXT,
  origin_path:DataTypes.TEXT,
  current_path:DataTypes.TEXT,
})

await sequelize.sync();