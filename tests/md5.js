import {pathToHash} from '../utils/index.js'
import md5 from'md5'


const str = 'D:\\projectsnew'
const hash = pathToHash(str)

const hash2 = md5(str)

console.log({hash,hash2})