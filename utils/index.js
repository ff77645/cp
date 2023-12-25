import {isAbsolute,resolve} from 'path'
import fs from 'fs'
import crypto from 'crypto'

export function isDir(path){
	return fs.statSync(path).isDirectory()
}

export function isExist(path){
	return fs.existsSync(path)
}

export function isEqual(path1,path2){
	const stat1 = fs.statSync(path1)
	const stat2 = fs.statSync(path2)
	return stat1.ino === stat2.ino
}

export function getFilePath(file) {
	const currentDir = process.cwd()
	if(!file) return currentDir
	if(isAbsolute(file)) return file
	return resolve(currentDir,file)
}

export function generateFileName() {
	const bytes = crypto.randomBytes(16)
	return bytes.toString('hex').substring(0, 15)
}

export function pathToHash(path) {
	return crypto.createHash('md5').update(path).digest('hex')
}