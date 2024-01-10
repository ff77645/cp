import BaseModel from '../BaseModel'

export default class GraphicNav extends BaseModel {
  constructor() {
    super('component')
    this.name = 'GraphicNav'
    this.style = {
      '--bg-color': '#FFFFFF',
      '--text-color': '#333333',
      '--cols': '3'
    }
    this.config = {
      list: []
    }
  }
}
