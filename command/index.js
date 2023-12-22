import request from '../utils/request.js'
import { getFilePath } from '../helper/index.js'
import { isExist,isDir } from '../utils/index.js'
export async function handleCopy(path, options,command){
  const filePath = getFilePath(path)
  if(!isExist(filePath)) return console.log(`文件不存在${filePath}`)
  const {tag,group} = options
  console.log({filePath,options,path});
  await request.post('/copy',{
    filePath,
    tag,
    group,
  })
}

export async function handlePaste(path, options,command){
  const filePath = getFilePath(path)
  if(!isExist(filePath) || !isDir(filePath)) return console.log(`路径无效`)
  const {msg} = await request.post('/paste',{
    filePath,
  })
  console.log(msg);
}