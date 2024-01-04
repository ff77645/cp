import { v1 } from 'uuid'
export class PageScheme {
  constructor(title) {
    this.uid = v1().split('-')[0]
    this.type = 'page'
    this.title = title
    this.styles = {
      backgroundColor: '#ffffff',
      backgroundImage: ''
    }
    this.shareInfo = {
      description: '',
      backgroundImage: ''
    }
    this.components = []
  }
}