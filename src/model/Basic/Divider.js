import BaseModel from '../BaseModel'

export default class Divider extends BaseModel {
  constructor() {
    super('component')
    this.name = 'Divider'
    this.style = {
      '--bg-color': '#FFFFFF',
      '--border-style': 'solid',
      '--border-color': '#464C5B',
      '--border-width': '1px',
      '--padding-x': '0px',
      '--padding-y': '0px'
    }
    this.config = {}
  }
}
