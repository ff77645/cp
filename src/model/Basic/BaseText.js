import BaseModel from '../BaseModel'

export default class BaseText extends BaseModel {
  constructor() {
    super('component')
    this.name = 'BaseText'
    this.style = {
      padding: '16px 15px',
      color: '#808080',
      fontSize: '14px',
      textAlign: 'left',
      backgroundColor: '#FFFFFF',
      border: '1px solid #FFFFFF',
      borderColor: '#FFFFFF'
    }
    this.config = {
      text: '',
      linkUrl: ''
    }
  }
}
