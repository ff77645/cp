<template>
  <main class="flex justify-center items-center" style="flex: 2">
    <PhoneEmulate>
      <TransitionGroup
        ref="sortableRef"
        type="transition"
        tag="div"
        name="fade"
        class="h-full overflow-auto"
      >
        <Text
          v-for="item in nodeList"
          :key="item.type"
          v-edit
          :text="item.type"
          isEdit
          :config="textConfig"
        ></Text>
      </TransitionGroup>
    </PhoneEmulate>
  </main>
</template>
<script setup>
import { ref } from 'vue'
import PhoneEmulate from '@/components/PhoneEmulate.vue'
import Text from '@/components/BaseComponent/Text/index.vue'
import { useDraggable } from 'vue-draggable-plus'
import { useCounterStore } from '@/stores/counter'

const sortableRef = ref(null)
const { nodeList } = useCounterStore()
useDraggable(sortableRef, nodeList, {
  animation: 150,
  onEnd() {
    console.log({ nodeList })
  }
})

const textConfig = {
  styles: {
    padding: '16px 15px',
    color: '#808080',
    fontSize: '14px'
  }
}
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
