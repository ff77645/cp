import Router from '@koa/router'
import commandRouter from './command.js'

const router = new Router()

router.get('/', async (ctx) => {
	ctx.body = 'CP Cli Server Running.'
})

router.get('/exit',ctx=>{
	ctx.log.info('退出服务')
	process.exit(0)
})


router
	.use('/api',commandRouter.routes())


export default router