import BaseModel from '../BaseModel'

export default class TabBar extends BaseModel {
  constructor() {
    super('component')
    this.name = 'TabBar'
    this.style = {
      '--bg-color': '#FFFFFF',
      '--text-color': '#333333'
    }
    this.config = {}
  }
}
