import BaseModel from '../BaseModel'

export default class Product extends BaseModel {
  constructor() {
    super('component')
    this.name = 'Product'
    this.style = {
      '--padding-x': '12px',
      '--padding-y': '12px',
      '--content-space': '12px',
      '--border-radius': '4px',
      '--font-weight': '400',
      '--text-align': 'left'
    }
    this.config = {
      projects: [],
      listType: 'big-img',
      productStyle: 'has-border',
      contents: ['name', 'desc', 'price', 'button'],
      imgScale: 1,
      markStyle: 'hot2'
    }
  }
}
