import BaseModel from '../BaseModel'

export default class Page extends BaseModel {
  constructor(title) {
    super('page')
    this.title = title
    this.isHome = false
    this.style = {
      backgroundColor: '#F4F4F4',
      backgroundImage: ''
    }
    this.config = {
      shareText: '',
      shareImage: ''
    }
    this.components = []
    this._key = 1
  }
}
