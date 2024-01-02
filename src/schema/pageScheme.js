// import dayjs from "dayjs"

export class PageScheme {
  constructor(title) {
    // this.uid = dayjs().unix()
    this.uid = 0
    this.type = 'page'
    this.title = title
    this.config = {
      styles: {
        backgroundColor: '#ffffff',
        backgroundImage: ''
      },
      shareInfo: {
        description: '',
        backgroundImage: ''
      }
    }
    this.components = []
  }
}
