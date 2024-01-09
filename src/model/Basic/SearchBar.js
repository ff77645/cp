import BaseModel from '../BaseModel'

export default class SearchBar extends BaseModel {
  constructor() {
    super('component')
    this.name = 'SearchBar'
    this.style = {
      '--bg-color': '#FFFFFF',
      '--content-color': '#FFFFFF',
      '--border-color': '#E6E6E6',
      '--border-width': '1px',
      '--text-align': 'left',
      '--border-radius': '100px',
      '--text-color': '#999999',
      '--icon-color': '#999999'
    }
    this.config = {
      placeholder: '请输入关键字进行搜索',
      showIcon: true
    }
  }
}
