import BaseModel from '../BaseModel'

export default class BaseImage extends BaseModel {
  constructor() {
    super('component')
    this.name = 'BaseImage'
    this.style = {
      paddingTop: '0px',
      paddingBottom: '0px',
      paddingLeft: '0px',
      paddingRight: '0px',
      backgroundColor: '#FFFFFF',
      borderRadius: '0px'
    }
    this.config = {
      src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    }
  }
}
