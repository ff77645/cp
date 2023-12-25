import { spawn } from 'child_process'
import path from 'path'

const filePath = path.resolve(process.cwd(),'../server/app.js')
const cwd = path.resolve(process.cwd(),'..')
const sp = spawn('node',[filePath],{shell:true,cwd})

sp.stdout.on('data', (data) => {
	console.log(`stdout: ${data}`)
})

sp.stderr.on('data', (data) => {
	console.log(`stderr: ${data}`)
}) 