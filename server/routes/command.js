import Router from '@koa/router'
import {handleCopy,handlePaste} from '../controller/command.js'

const router = new Router()

router.post('/copy',handleCopy)
router.post('/paste',handlePaste)


export default router 