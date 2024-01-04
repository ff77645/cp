<template>
  <main class="flex justify-center items-center" style="flex: 2">
    <PhoneEmulate @click="selectPage" :title="currentPage.title">
      <div ref="sortableRef" class="h-full overflow-auto overflow-x-hidden">
        <TransitionGroup type="transition" name="fade">
          <component
            isEdit
            v-for="item in currentPage.components"
            v-edit="item.uid === currentComponent.uid"
            :key="item.uid"
            :is="item.name"
            :config="item.config"
            :style="item.style"
            :data="item"
            @click.stop="selectComponent(item)"
          ></component>
        </TransitionGroup>
      </div>
    </PhoneEmulate>
  </main>
</template>
<script>
import { computed, ref, defineComponent } from 'vue'
import PhoneEmulate from '@/components/PhoneEmulate.vue'
import { useDraggable } from 'vue-draggable-plus'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'
import BaseText from '@/components/BasicComponent/BaseText/index.vue'
import BaseTitle from '@/components/BasicComponent/BaseTitle/index.vue'
import BaseImage from '@/components/BasicComponent/BaseImage/index.vue'
import Swiper from '@/components/BasicComponent/Swiper/index.vue'

export default defineComponent({
  name: 'Container',
  components: {
    PhoneEmulate,
    BaseText,
    BaseTitle,
    BaseImage,
    Swiper
  },
  setup() {
    const builderStore = useBuilderStore()
    const { currentPage, currentComponent } = storeToRefs(builderStore)
    const sortableRef = ref(null)
    const components = computed({
      get: () => currentPage.value.components,
      set: (val) => (currentPage.value.components = val)
    })
    useDraggable(sortableRef, components, {
      animation: 150,
      group: 'component'
    })

    const selectComponent = (component) => {
      builderStore.setCurrentComponent(component)
    }
    const selectPage = () => {
      console.log('click')
      selectComponent({})
    }

    return {
      selectPage,
      currentPage,
      sortableRef,
      selectComponent,
      currentComponent
    }
  }
})
</script>
<style>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>
