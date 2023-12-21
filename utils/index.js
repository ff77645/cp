import {isAbsolute,resolve,dirname} from 'path'
import {homedir} from 'os'
import fs from 'fs'
import fse from 'fs-extra'
import crypto from 'crypto'

export function isDir(path){
  return fs.statSync(path).isDirectory()
}

export function isExist(path){
  return fs.existsSync(path)
}

export function isEqual(path1,path2){
  const stat1 = fs.statSync(path1)
  const stat2 = fs.statSync(path2)
  return stat1.ino === stat2.ino
}

export function getFilePath(file) {
  const currentDir = process.cwd()
  if(!file) return currentDir
  if(isAbsolute(file)) return file
  return resolve(currentDir,file)
}

function generateFileName() {
  const bytes = crypto.randomBytes(16);
  return bytes.toString("hex").substring(0, 15)
}

export function getDestPath(filePath) {
  const dir = getConfig('store')
  const path = (isDir(filePath) ? 'folder/' : 'files/') + generateFileName()
  return resolve(dir,path)
}

export function getConfigPath(){
  return resolve(homedir(),'.cp/config.json')
}
export function getConfig(key){
  const configFile = fse.readJsonSync(getConfigPath())
  return key ? configFile[key] : configFile
}

export function setConfig(key,value){
  const configFile = getConfig()
  configFile[key] = value
  fse.writeJsonSync(getConfigPath(),configFile,{spaces:'\t'})
}

export function initConfig(){
  const configPath = getConfigPath()
  if(!fs.existsSync(configPath)){
    const dir = dirname(process.argv[1])
    const configData = fse.readJsonSync(resolve(dir,'config.json'))
    configData.store = resolve(dir,'store')
    fse.outputJsonSync(configPath,configData,{spaces:'\t'})
  }
}