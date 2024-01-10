import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import Page from '@/model/Basic/Page'
import { cloneDeep } from 'lodash-es'
import { shortid } from '@/utils'

export const useCurrentPage = defineStore('currentPage', () => {
  const home = new Page('首页')
  const currentPage = ref(home)
  const setCurrentPage = (page) => {
    currentPage.value = page
  }
  return {
    currentPage,
    setCurrentPage
  }
})

export const useBuilderStore = defineStore('builder', () => {
  // const home = new Page('首页')
  const currentPageStore = useCurrentPage()
  const { currentPage } = storeToRefs(currentPageStore)

  const pageStack = ref([currentPage.value])
  // const currentPage = ref(home)
  const currentComponent = ref({})
  const noRecord = ref(false)
  const { setCurrentPage } = currentPageStore
  // const setCurrentPage = (page) => {
  //   currentPage.value = page
  // }
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
