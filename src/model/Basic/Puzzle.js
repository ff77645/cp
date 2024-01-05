import BaseModel from '../BaseModel'

export default class Puzzle extends BaseModel {
  constructor() {
    super('component')
    this.name = 'Puzzle'
    this.style = {
      paddingTop: '0px',
      paddingBottom: '0px',
      paddingLeft: '0px',
      paddingRight: '0px',
      backgroundColor: '#FFFFFF',
      borderRadius: '0px',
      '--puzzle-gap': '12px'
    }
    this.config = {
      layoutType: 'r2',
      imgList: [
        {
          src: 'http://pic.yupoo.com/isfy666/695a996e/393b433f.jpg',
          name: 'test',
          link: ''
        }
      ]
    }
  }
}
