import Router from '@koa/router'
import cliRouter from './cli.js'
const router = new Router()


router.use('/api',cliRouter.routes(),cliRouter.allowedMethods())


export default router