<template>
  <main class="flex justify-center items-center" style="flex: 2">
    <PhoneEmulate @click="selectPage" :title="currentPage.title">
      <div
        ref="sortableRef"
        class="h-full overflow-auto overflow-x-hidden flex flex-col flex-nowrap"
        :style="currentPage.style"
      >
        <TransitionGroup type="transition" name="fade">
          <component
            isEdit
            v-for="item in currentPage.components"
            v-edit="item.uid === currentComponent.uid"
            :key="item.uid"
            :is="item.name"
            :data="item"
            @click.stop="selectComponent(item)"
          ></component>
        </TransitionGroup>
        <div v-if="hasTabBar" class="no-drag flex-1"></div>
      </div>
    </PhoneEmulate>
  </main>
</template>
<script>
import { computed, ref, defineComponent, toRaw } from 'vue'
import PhoneEmulate from '@/components/PhoneEmulate/index.vue'
import { useDraggable } from 'vue-draggable-plus'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'

const baseCompFile = import.meta.glob(
  ['@/components/Basic/*/index.vue', '!@/components/Basic/*Config/index.vue'],
  { eager: true, import: 'default' }
)

const baseComponents = Object.keys(baseCompFile).reduce((result, path) => {
  const name = path.split('/').at(-2)
  result[name] = baseCompFile[path]
  return result
}, {})

export default defineComponent({
  name: 'Container',
  components: {
    PhoneEmulate,
    ...baseComponents
  },
  setup() {
    const builderStore = useBuilderStore()
    const { currentPage, currentComponent } = storeToRefs(builderStore)
    const sortableRef = ref(null)
    const components = computed({
      get: () => currentPage.value.components,
      set: (val) => {
        currentPage.value.components = val.map(toRaw)
      }
    })
    const hasTabBar = computed(() =>
      currentPage.value.components.some((item) => item.name === 'TabBar')
    )
    useDraggable(sortableRef, components, {
      animation: 150,
      group: 'component',
      filter: '.no-drag'
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
      currentComponent,
      hasTabBar
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
