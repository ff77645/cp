/* eslint-disable no-unused-vars */

class PageStack {
  constructor() {
    this.data = []
    this.max = 100
    this.current = -1
    this.cacheMax = this.max + Math.floor(this.max / 3)
  }
  postMsg(noData) {
    const data = {
      isLast: this.current === -1,
      isFirst: this.current === -Math.min(this.max, this.data.length),
      current: this.current
    }
    // console.log('this.current', this.current)
    if (!noData) {
      data.data = this.data.at(this.current)
    }
    postMessage(data)
  }
  // 添加
  add(data) {
    if (this.current !== -1) {
      this.data = this.data.slice(0, this.current + 1)
      this.current = -1
    }
    this.data.push(data)
    this.postMsg(true)
    if (this.data.length > this.cacheMax) {
      this.data = this.data.slice(this.data.length - this.max)
    }
  }
  // 回退
  back() {
    if (this.current <= -this.max) {
      return this.postMsg()
    }
    this.current--
    return this.postMsg()
  }
  // 前进
  forward() {
    if (this.current < -1) this.current++
    this.postMsg()
  }
  // 清除
  clear() {
    this.data = []
    this.current = -1
  }
}
const pageStack = new PageStack()
onmessage = function ({ data }) {
  // console.log('worker event', data.type)
  pageStack[data.type](data.data)
}
