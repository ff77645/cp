import { ref } from 'vue'
import { mixColors, hexToRgb } from '@/utils'

export function useTheme(options) {
  options = Object.assign({ type: 'primary' }, options)
  const { type } = options
  const mode = 'light'
  const themeId = `theme_${type}_custom`
  const themeColor = ref('#BD8B46')
  const lightMixColor = '#ffffff'
  const darkMixColor = '#000000'
  const storeThemeColor = localStorage.getItem(themeId)
  const currentThemeColor = getComputedStyle(document.documentElement).getPropertyValue(
    `--el-color-${type}`
  )

  const setThemeColor = (color) => {
    let styles = `:root{`
    styles += `--el-color-${type}:${color};`
    styles += `--el-color-${type}-rgb:${hexToRgb(color)};`
    for (let i = 1; i < 10; i++) {
      styles += `--el-color-${type}-${mode}-${i}:${mixColors(lightMixColor, color, 1 - i / 10)};`
    }
    styles += `--el-color-${type}-dark-2:${mixColors(darkMixColor, color, 1 - 2 / 10)};`
    styles += '}'
    let el = document.getElementById(themeId)
    if (el) {
      el.innerText = styles
    } else {
      el = document.createElement('style')
      el.setAttribute('id', themeId)
      el.setAttribute('type', 'text/css')
      el.innerText = styles
      document.head.appendChild(el)
    }
    themeColor.value = color
    localStorage.setItem(themeId, color)
  }
  if (storeThemeColor) {
    if (storeThemeColor !== currentThemeColor) {
      setThemeColor(storeThemeColor)
    } else {
      themeColor.value = storeThemeColor
    }
  } else {
    setThemeColor(themeColor.value)
  }
  return [themeColor, setThemeColor]
}
