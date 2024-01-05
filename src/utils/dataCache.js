/* eslint-disable no-unused-vars */

class PageStack {
  constructor() {
    this.data = []
    this.index = 0
  }
  // 添加
  add(data) {
    this.data.push(data)
    this.index = this.data.length - 1
  }
  // 回退
  back() {}
  // 前进
  forward() {}
  // 更新
  update() {}
}
