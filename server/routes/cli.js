import Router from '@koa/router'

const router = new Router()

router.get('/test',ctx=>{
  ctx.body = 'hello world'
})


export default router 