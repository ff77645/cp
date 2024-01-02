import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBuilderStore = defineStore('builder', () => {
  const pageStack = ref([])
  const configData = ref({})
  const currentPage = ref({})
  const currentComponent = ref({})

  return {
    pageStack,
    configData,
    currentPage,
    currentComponent
  }
})
