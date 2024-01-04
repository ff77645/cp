import BaseModel from '../BaseModel'

export default class BaseTitle extends BaseModel {
  constructor() {
    super('component')
    this.name = 'BaseTitle'
    this.style = {
      padding: '16px 15px',
      color: '#808080',
      fontSize: '14px',
      textAlign: 'left',
      backgroundColor: '#FFFFFF'
    }
    this.config = {
      title: '',
      linkUrl: '',
      type: 'traditional',
      subtitle: '',
      date: '',
      author: ''
    }
  }
}
