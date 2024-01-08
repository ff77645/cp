import BaseModel from '../BaseModel'
const videos = [
  'https://uvd.yupoo.com/isfy666/22822920.mp4',
  'https://uvd.yupoo.com/isfy666/22823576.mp4',
  'https://uvd.yupoo.com/isfy666/22823636.mp4',
  'https://uvd.yupoo.com/isfy666/22823589.mp4',
  'https://uvd.yupoo.com/isfy666/22823760.mp4'
]
export default class BaseVideo extends BaseModel {
  constructor() {
    super('component')
    this.name = 'BaseVideo'
    this.style = {
      paddingTop: '0px',
      paddingBottom: '0px',
      paddingLeft: '0px',
      paddingRight: '0px',
      backgroundColor: '#FFFFFF',
      borderRadius: '0px'
    }
    this.config = {
      src: videos[Math.floor(Math.random() * 10) % videos.length],
      poster: '',
      autoplay: true,
      sourceType: 'library'
    }
  }
}
