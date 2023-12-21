import Router from '@koa/router'

const router = new Router()

router.get('/test',ctx=>{
  ctx.body = 'cli test'
})


export default router 