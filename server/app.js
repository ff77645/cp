import Koa from 'koa'
import koaBody from 'koa-body'
import KoaLogger from 'koa-logger'
import router from './routes/index.js'

const app = new Koa()

app.use(koaBody())
app.use(KoaLogger())

app.use(router.routes())


app.listen(9100,()=>{
    console.log('服务启动成功')
})