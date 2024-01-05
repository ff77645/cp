<template>
  <div class="bg-white p-4 overflow-auto">
    <template v-if="currentComponent && currentComponent.name">
      <component :is="currentComponent.name + 'Config'" :key="currentComponent.uid"></component>
    </template>
    <PageConfig v-else></PageConfig>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'

const baseConfigFile = import.meta.glob('@/components/BasicComponent/*Config/index.vue', {
  eager: true,
  import: 'default'
})
const baseConfigComp = Object.keys(baseConfigFile).reduce((result, path) => {
  const name = path.split('/').at(-2)
  result[name] = baseConfigFile[path]
  return result
}, {})
baseConfigComp.BaseConfig = undefined

export default defineComponent({
  name: 'AsideRight',
  components: {
    ...baseConfigComp
  },
  setup() {
    const { currentComponent } = storeToRefs(useBuilderStore())
    return {
      currentComponent
    }
  }
})
</script>
