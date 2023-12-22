import {Sequelize } from 'sequelize'
import {getConfig} from '../../helper/index.js'
import {join} from 'path'
import FileModel from './file.js'

const storage = join(getConfig('store'),'data/database.sqlite')
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

export const File = sequelize.define('File', FileModel)

await sequelize.sync({alter:true});