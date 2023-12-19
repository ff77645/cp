import {isAbsolute,resolve,basename} from 'path'
import fs from 'fs'


export function getFilePath(path) {
  const currentDir = process.cwd()
  if(!path) return currentDir
  if(isAbsolute(path)) return path
  return resolve(currentDir,path)
}

export function getDestPath(filePath) {
  const dir = 'D:/projects/cp/store'
  const name = basename(filePath)
  const path = (isDir(filePath) ? 'folder/' : 'files/') + name
  return resolve(dir,path)
}

export function isDir(path){
  return fs.statSync(path).isDirectory()
}

export function isExist(path){
  return fs.existsSync(path)
}

export function log(msg){
  console.log(msg)
}