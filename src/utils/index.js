import { v1 } from 'uuid'

export function shortid() {
  return v1().split('-')[0]
}

// 计算两个十六进制颜色的混合值
export function mixColors(color1, color2, weight) {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)

  const mixedRgb = rgb1.map((channel1, index) => {
    const channel2 = rgb2[index]
    const mixedChannel = Math.round(channel1 + (channel2 - channel1) * weight)
    return mixedChannel
  })

  const mixedColor = rgbToHex(mixedRgb)
  return mixedColor
}

// 将十六进制颜色转换为 RGB 数组
export function hexToRgb(hex) {
  const r = parseInt(hex.substr(1, 2), 16)
  const g = parseInt(hex.substr(3, 2), 16)
  const b = parseInt(hex.substr(5, 2), 16)
  return [r, g, b]
}

// 将 RGB 数组转换为十六进制颜色码
export function rgbToHex(rgb) {
  const r = rgb[0].toString(16).padStart(2, '0')
  const g = rgb[1].toString(16).padStart(2, '0')
  const b = rgb[2].toString(16).padStart(2, '0')
  return `#${r}${g}${b}`
}

// file 转 base64
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
