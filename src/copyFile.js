import {
  getFilePath,
  getDestPath,
  isExist,
  log,
} from '../utils/index.js'
import fs from 'fs-extra'
export function copyFile(path, options,command) {
  const filePath = getFilePath(path)
  if(!isExist(filePath)) return log(`文件不存在${filePath}`)
  const destPath = getDestPath(filePath)
  // fs.copySync(filePath,destPath)
  console.log({filePath,path, options,destPath});
}

