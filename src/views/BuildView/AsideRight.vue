<template>
  <div class="bg-white p-4">
    <template v-if="currentComponent && currentComponent.name">
      <component :is="currentComponent.name" :key="currentComponent.uid"></component>
    </template>
    <PageConfig v-else></PageConfig>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'
import PageConfig from '@/components/BasicComponent/PageConfig/index.vue'
import BaseText from '@/components/BasicComponent/BaseTextConfig/index.vue'

export default defineComponent({
  name: 'AsideRight',
  components: {
    PageConfig,
    BaseText
  },
  setup() {
    const { currentComponent } = storeToRefs(useBuilderStore())
    return {
      currentComponent
    }
  }
})
</script>
