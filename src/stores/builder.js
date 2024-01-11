import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import Page from '@/model/Basic/Page'
import { cloneDeep } from 'lodash-es'
import { shortid } from '@/utils'

export const useCurrentPage = defineStore('currentPage', () => {
  const page = new Page('首页')
  page.isHome = true
  const currentPage = ref(page)
  const setCurrentPage = (page) => {
    currentPage.value = page
  }
  return {
    currentPage,
    setCurrentPage
  }
})

export const useBuilderStore = defineStore('builder', () => {
  const currentPageStore = useCurrentPage()
  const { currentPage } = storeToRefs(currentPageStore)

  const pageStack = ref([currentPage.value])
  const currentComponent = ref({})
  const noRecord = ref(false)
  const homeUid = ref(currentPage.value.uid)
  const { setCurrentPage } = currentPageStore

  const setCurrentComponent = (component) => {
    currentComponent.value = component
  }
  const deleteCurrentComponent = () => {
    currentPage.value.components.splice(
      currentPage.value.components.indexOf(currentComponent.value),
      1
    )
    currentComponent.value = {}
  }
  const copyCurrentComponent = () => {
    const component = cloneDeep(currentComponent.value)
    component.uid = shortid()
    currentPage.value.components.push(component)
  }

  return {
    homeUid,
    noRecord,
    pageStack,
    currentPage,
    currentComponent,
    setCurrentPage,
    setCurrentComponent,
    deleteCurrentComponent,
    copyCurrentComponent
  }
})
