import {
  getFilePath,
  getDestPath,
  isExist,
} from '../utils/index.js'
import fs from 'fs-extra'
// import {File} from '../server/model/index.js'
import {basename} from 'path'


export async function copyFile(path, options,command) {
  const filePath = getFilePath(path)
  if(!isExist(filePath)) return console.log(`文件不存在${filePath}`)
  const destPath = getDestPath(filePath)
  fs.ensureSymlinkSync(filePath,destPath)
  // await File.create({
  //   file_name:basename(filePath),
  //   file_path:destPath,
  //   origin_path:filePath,
  // })
  console.log({filePath,path, options,destPath});
}

