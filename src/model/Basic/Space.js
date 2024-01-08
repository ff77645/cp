import BaseModel from '../BaseModel'

export default class Space extends BaseModel {
  constructor() {
    super('component')
    this.name = 'Space'
    this.style = {
      height: '10px',
      backgroundColor: '#FFFFFF'
    }
    this.config = {}
  }
}
