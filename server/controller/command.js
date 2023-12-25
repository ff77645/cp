import {
  pathToHash,
  isDir,
  isExist,
} from '../../utils/index.js'
import fs from 'fs-extra'
import {File} from '../model/index.js'
import {basename} from 'path'
import {
  getDestPath,
} from '../../helper/index.js'
import {Ok,Err} from '../../helper/result.js'


export const handleCopy = async (ctx) =>{
  const {filePath,tag,group} = ctx.request.body
  const hash = pathToHash(filePath)
  // const destPath = getDestPath(filePath) + hash.substring(8,24)
  // fs.ensureSymlinkSync(filePath,destPath)
  await File.create({
    file_name:basename(filePath),
    // link_path:destPath,
    file_path:filePath,
    path_hash:hash,
    tag,
    group,
  })
  ctx.body = new Ok
}



export const handlePaste = async ctx =>{
  const {filePath} = ctx.request.body
  const files = await File.findAll({
    order:[['createdAt','DESC']],
    limit:1,
  })
  const file = files[0]
  if(file && isExist(file.filePath)){
    const {file_path,file_name} = file
    const dest = `${filePath}/${file_name}`
    fs.copySync(file_path,dest)
    ctx.body = Ok.msg(`${file_path} 已复制到: ${dest}`)
  }else{
    ctx.body = Err.msg('暂无可复制内容',404)
  }
}

