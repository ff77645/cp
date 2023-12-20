import {
  getFilePath,
  getDestPath,
  isExist,
  log,
} from '../utils/index.js'
import fs from 'fs-extra'
import {File} from '../model/index.js'
import {basename} from 'path'

export const handleCopy = async ctx =>{
  const {path,options} = ctx.request.body
  const filePath = getFilePath(path)
  if(!isExist(filePath)) return log(`文件不存在${filePath}`)
  const destPath = getDestPath(filePath)
  fs.ensureSymlinkSync(filePath,destPath)
  await File.create({
    file_name:basename(filePath),
    file_path:destPath,
    origin_path:filePath,
  })
  console.log({filePath,path, options,destPath});


}



export const handlePaste = async ctx =>{
  // TODO
}


export default {
  handleCopy,
  handlePaste,
}