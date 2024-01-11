import { shallowRef } from 'vue'

export function useAreaData(opts = {}) {
  const areaData = shallowRef([])
  const loadData = () => {
    if (areaData.value.length) return
    import('element-china-area-data').then((res) => {
      areaData.value = res.regionData
    })
  }
  opts.immediate && loadData()
  return {
    areaData,
    loadData
  }
}
