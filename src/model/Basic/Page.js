import BaseModel from '../BaseModel'

export default class Page extends BaseModel {
  constructor(title) {
    super('page')
    this.title = title
    this.styles = {
      backgroundColor: '#ffffff',
      backgroundImage: ''
    }
    this.shareInfo = {
      description: '',
      backgroundImage: ''
    }
    this.components = []
  }
}
