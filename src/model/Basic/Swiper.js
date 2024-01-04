import BaseModel from '../BaseModel'

export default class Swiper extends BaseModel {
  constructor() {
    super('component')
    this.name = 'Swiper'
    this.style = {
      // paddingTop:'0px',
      // paddingBottom:'0px',
      // paddingLeft:'0px',
      // paddingRight:'0px',
      // backgroundColor: '#FFFFFF',
      // borderRadius: '0px',
    }
    this.config = {
      imgList: [
        {
          src: 'http://pic.yupoo.com/isfy666/695a996e/393b433f.jpg',
          name: 'test',
          link: ''
        }
      ],
      delay: 3000,
      indicatorColor: '#BD8B46',
      indicatorType: 'dot'
    }
  }
}
