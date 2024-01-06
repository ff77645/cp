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
            :data="item"
            @click.stop="selectComponent(item)"
          ></component>
        </TransitionGroup>
      </div>
    </PhoneEmulate>
  </main>
</template>
<script>
import { computed, ref, defineComponent, toRaw } from 'vue'
import PhoneEmulate from '@/components/PhoneEmulate.vue'
import { useDraggable } from 'vue-draggable-plus'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'

const baseCompFile = import.meta.glob(
  ['@/components/BasicComponent/*/index.vue', '!@/components/BasicComponent/*Config/index.vue'],
  { eager: true, import: 'default' }
)
console.log({ baseCompFile })

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

/* .fade-leave-active {
  position: absolute;
} */
</style>
