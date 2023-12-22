import Koa from 'koa'
import {koaBody} from 'koa-body'
import KoaLogger from 'koa-logger'
import router from './routes/index.js'
import {getConfig,setConfig} from '../helper/index.js'
import {logger,WinstonLogger} from './middleware/winston-logger.js'
import HandleError from './middleware/handle-error.js'

const isDev = process.env.NODE_ENV === 'development'
const PORT = getConfig('port')
const app = new Koa()

app.use(KoaLogger())

// app.use(WinstonLogger())
// if(isDev){
//     app.use(KoaLogger())
// }else{
//     app.use(KoaLogger((str,args)=>{
//         const [ format, method, url, status, time ] = args
//         if(!time) return
//         logger.log('http',{method, url, status, time})
//     }))
    // app.use(HandleError)
// }
app.use(koaBody())
app.use(router.routes())

// app.on('error',(err,ctx)=>{
//     ctx.log.error(err.toString())
// })

// process.on('exit',code=>{
//     setConfig('isStarted',false)
//     logger.error(`服务关闭,退出码: ${code}`)
// })
// process.on('SIGINT',()=>{
//     setConfig('isStarted',false)
//     logger.error('服务关闭,退出码: 130')
//     process.exit(130)
// })
// process.on('SIGTERM',()=>{
//     setConfig('isStarted',false)
//     logger.error('服务关闭,退出码: 143')
//     process.exit(143)
// })

export function start(){
    app.listen(PORT,()=>{
        setConfig('isStarted',true)
        // logger.info(`服务启动成功，端口号：${PORT}`)
        console.log(`服务启动成功，端口号：${PORT}`);
    })
    
}
start()
