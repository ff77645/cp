<template>
  <div class="bg-white p-4 overflow-auto">
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
import BaseTitle from '@/components/BasicComponent/BaseTitleConfig/index.vue'
import BaseImage from '@/components/BasicComponent/BaseImageConfig/index.vue'
import Swiper from '@/components/BasicComponent/SwiperConfig/index.vue'

export default defineComponent({
  name: 'AsideRight',
  components: {
    PageConfig,
    BaseText,
    BaseTitle,
    BaseImage,
    Swiper
  },
  setup() {
    const { currentComponent } = storeToRefs(useBuilderStore())
    return {
      currentComponent
    }
  }
})
</script>
