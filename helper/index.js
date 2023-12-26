import path from 'path'
import { isDir } from '../utils/index.js'
import {homedir} from 'os'
import fs from 'fs-extra'

export function initConfig(){
	const configPath = getConfigPath()
	if(!fs.existsSync(configPath)){
		const dir = path.dirname(process.argv[1])
		const configData = fs.readJsonSync(path.resolve(dir,'config.json'))
		configData.store = path.resolve(dir,'store')
		fs.outputJsonSync(configPath,configData,{spaces:'\t'})
	}
}

export function getDestPath(filePath) {
	const dir = getConfig('store')
	const path = isDir(filePath) ? 'folder/' : 'files/'
	return path.resolve(dir,path)
}

export function getConfigPath(){
	return path.resolve(homedir(),'.cp/config.json')
}

export function getConfig(key){
	const configFile = fs.readJsonSync(getConfigPath())
	return key ? configFile[key] : configFile
}

export function setConfig(key,value){
	const configFile = getConfig()
	configFile[key] = value
	fs.writeJsonSync(getConfigPath(),configFile,{spaces:'\t'})
}

export function getFilePath(file) {
	const currentDir = process.cwd()
	if(!file) return currentDir
	if(path.isAbsolute(file)) return file
	return path.resolve(currentDir,file)
}

export function getGroupFilePath(groupName) {
	const groupDir = path.join(getConfig('store'),'group',groupName)
	const files = fs.readdirSync(groupDir)	
	let file = fs.realpathSync(path.join(groupDir,files[0]))
	let date = fs.statSync(file).mtime
	files.slice(1).forEach(p=>{
		const f = fs.realpathSync(path.join(groupDir,p))
		const mtime = fs.statSync(f).mtime
		if(mtime > date){
			file = f
			date = mtime
		}
	})
	return file
}