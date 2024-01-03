import BaseModel from '../BaseModel'

export default class Text extends BaseModel {
  constructor() {
    super('component')
    this.name = 'BaseText'
    this.style = {
      padding: '16px 15px',
      color: '#BD8B46',
      fontSize: '14px',
      textAlign: 'left',
      borderColor: '#FFFFFF',
      backgroundColor: '#FFFFFF'
    }
    this.config = {
      text: '',
      linkUrl: ''
    }
  }
}
