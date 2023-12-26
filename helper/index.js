import {dirname, resolve,isAbsolute} from 'path'
import { isDir } from '../utils/index.js'
import {homedir} from 'os'
import fss from 'fs-extra'
import fs from 'fs'

export function initConfig(){
	const configPath = getConfigPath()
	if(!fs.existsSync(configPath)){
		const dir = dirname(process.argv[1])
		const configData = fss.readJsonSync(resolve(dir,'config.json'))
		configData.store = resolve(dir,'store')
		fss.outputJsonSync(configPath,configData,{spaces:'\t'})
	}
}

export function getDestPath(filePath) {
	const dir = getConfig('store')
	const path = isDir(filePath) ? 'folder/' : 'files/'
	return resolve(dir,path)
}

export function getConfigPath(){
	return resolve(homedir(),'.cp/config.json')
}

export function getConfig(key){
	const configFile = fss.readJsonSync(getConfigPath())
	return key ? configFile[key] : configFile
}

export function setConfig(key,value){
	const configFile = getConfig()
	configFile[key] = value
	fss.writeJsonSync(getConfigPath(),configFile,{spaces:'\t'})
}

export function getFilePath(file) {
	const currentDir = process.cwd()
	if(!file) return currentDir
	if(isAbsolute(file)) return file
	return resolve(currentDir,file)
}