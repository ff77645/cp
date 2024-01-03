import { shortid } from '@/utils'

export default class BaseModel {
  constructor(type) {
    this.uid = shortid()
    this.type = type
  }
}
