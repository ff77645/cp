import {isAbsolute,resolve,basename, dirname} from 'path'
import fs from 'fs'
import fse from 'fs-extra'
import crypto from 'crypto'

export function isDir(path){
  return fs.statSync(path).isDirectory()
}

export function isExist(path){
  return fs.existsSync(path)
}

export function log(msg){
  console.log(msg)
}

export function isEqual(path1,path2){
  const stat1 = fs.statSync(path1)
  const stat2 = fs.statSync(path2)
  return stat1.ino === stat2.ino
}

export function getConfigPath(){
  return resolve(process.argv[1],'config.json')
}
export function getConfig(key){
  const configFile = fse.readJsonSync(getConfigPath())
  return key ? configFile[key] : configFile
}

export function setConfig(key,value){
  const configFile = getConfig()
  configFile[key] = value
  fse.writeJsonSync(getConfigPath(),configFile)
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
  const dir = getConfig().store
  const path = (isDir(filePath) ? 'folder/' : 'files/') + generateFileName()
  return resolve(dir,path)
}