import { 
	getFilePath,
	getConfig,
	setConfig,
	getGroupFilePath,
} from '../helper/index.js'
import { isExist,isDir,pathToHash } from '../utils/index.js'
import path from 'path'
import fs from 'fs-extra'

export async function handleCopy(_path, options){
	const filePath = getFilePath(_path)
	if(!isExist(filePath)) return console.log(`文件不存在${filePath}`)
	const hash = pathToHash(filePath).substring(8,24)
	let destPath = getConfig('store')
	const {group} = options
	if(group){
		destPath = path.join(destPath,'group',group,hash)
	}else{
		destPath = path.join(destPath,'files',hash)
	}
	if(isExist(destPath)) fs.removeSync(destPath)
	fs.ensureSymlinkSync(filePath,destPath)
	setConfig('lastCopy',filePath)
	console.log(`文件${filePath}已复制${destPath}`)
}

export async function handlePaste(_path,options){
	const destPath = getFilePath(_path)
	if(!isExist(destPath) || !isDir(destPath)) return console.log('路径无效')
	const {group} = options
	if(group){
		const groupDir = path.join(getConfig('store'),'group',group)
		if(!isExist(groupDir)) return console.log(`分组:${group} 不存在`)
		const filePath = getGroupFilePath(group)
		console.log({filePath})
		fs.copySync(filePath,path.join(destPath,path.basename(filePath)))
	}else{
		const lastCopy = getConfig('lastCopy')
		if(!lastCopy || !isExist(lastCopy)) return console.log('暂无可复制文件')
		console.log({lastCopy,destPath})
		const lastDestPath = path.join(destPath,path.basename(lastCopy))
		fs.copySync(lastCopy,lastDestPath)
		console.log(`文件${lastCopy}已粘贴到${lastDestPath}`)
	}

}


export async function handleGroup(_path,options){
	console.log({
		_path,
		options
	})
}
