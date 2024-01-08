import { ref } from 'vue'
import { defineStore } from 'pinia'
import Page from '@/model/Basic/Page'
import { cloneDeep } from 'lodash-es'
import { shortid } from '@/utils'

export const useBuilderStore = defineStore('builder', () => {
  const home = new Page('首页')
  const pageStack = ref([home])
  const currentPage = ref(home)
  const currentComponent = ref({})
  const noRecord = ref(false)

  const setCurrentPage = (page) => {
    currentPage.value = page
  }
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
