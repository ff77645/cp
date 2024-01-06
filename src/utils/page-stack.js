/* eslint-disable no-unused-vars */

class PageStack {
  constructor() {
    this.data = []
    this.current = 0
    this.total = 0
    this.max = 100
  }
  postMsg(noData) {
    const data = {
      current: this.current,
      total: this.total
    }
    if (!noData) {
      data.data = this.data[this.current - 1]
    }
    postMessage(data)
  }
  init() {
    this.postMsg()
  }
  // 添加
  add(data) {
    this.data.push(data)
    this.total++
    this.current++
    this.postMsg(true)
  }
  // 回退
  back() {
    if (this.current === 1) {
      return this.postMsg()
    }
    this.current--
    return this.postMsg()
  }
  // 前进
  forward() {
    if (this.current === this.total) {
      return this.postMsg()
    }
    this.current++
    this.postMsg()
  }
  // 更新
  update() {
    this.total = this.current
    this.data = this.data.slice(0, this.current)
    this.postMsg(true)
  }
  // 清除
  clear() {
    this.data = []
    this.index = 0
    this.total = 0
    // this.postMsg()
  }
}
console.log('worker')
const pageStack = new PageStack()
onmessage = function ({ data }) {
  console.log('worker event', data.type)
  pageStack[data.type](data.data)
}
