import {spawn} from 'child_process'
import {dirname, resolve} from 'path'

export function startServer(){
  const filePath = resolve(dirname(process.argv[1]),'server/app.js')
  spawn('node',[filePath],{
    detached:true,
    stdio:'ignore',
  }).unref()
}