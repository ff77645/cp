/* eslint-disable */
import parseArgs from 'minimist'
import path from 'path'
import fs from 'fs'

const argv = parseArgs(process.argv.slice(2))

const name = argv._[0]
if (!name) throw new Error('name is required')
const pwd = process.cwd()

const componentDir = path.join(pwd, 'src/components/BasicComponent')
const baseComponent = path.join(componentDir, 'BaseText/index.vue')
const baseConfig = path.join(componentDir, 'BaseConfig/index.vue')
const destComponentDir = path.join(componentDir, name)
const destComponentConfigDir = path.join(componentDir, name + 'Config')

const modelDir = path.join(pwd, 'src/model/Basic')
const baseModel = path.join(modelDir, 'Divider.js')
const destModel = path.join(modelDir, name + '.js')

console.log('创建组件')
fs.mkdirSync(destComponentDir)
fs.copyFileSync(baseComponent, path.join(destComponentDir, 'index.vue'), fs.constants.COPYFILE_EXCL)

console.log('创建配置组件')
fs.mkdirSync(destComponentConfigDir)
fs.copyFileSync(
  baseConfig,
  path.join(destComponentConfigDir, 'index.vue'),
  fs.constants.COPYFILE_EXCL
)

console.log('创建model')

const replaceStr = 'Divider'
const modelString = fs.readFileSync(baseModel, { encoding: 'utf-8' })
const fileData = modelString.replaceAll(replaceStr, name)
fs.writeFileSync(destModel, fileData)

console.log(`${name} 组件创建完成`)
