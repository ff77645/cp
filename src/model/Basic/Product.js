import BaseModel from '../BaseModel'

export default class Product extends BaseModel {
  constructor() {
    super('component')
    this.name = 'Product'
    this.style = {
      '--bg-color': '#FFFFFF',
      '--border-style': 'solid',
      '--border-color': '#464C5B',
      '--border-width': '1px',
      '--padding-x': '0px',
      '--padding-y': '0px',
      '--text-align': 'left',
      '--content-space': '12px'
    }
    this.config = {
      projects: [],
      listType: 'big-img',
      productStyle: 'noBorder',
      contents: ['name', 'desc', 'price', 'button'],
      radius: 'none',
      fontWeight: '400',
      imgScale: 1
    }
  }
}
