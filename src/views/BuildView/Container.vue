<template>
  <main class="flex justify-center items-center" style="flex: 2">
    <PhoneEmulate :title="currentPage.title">
      <div ref="sortableRef" class="h-full overflow-auto overflow-x-hidden" @drop="onDrop">
        <TransitionGroup type="transition" name="fade">
          <Text
            v-edit
            isEdit
            v-for="item in nodeList"
            :key="item.type"
            :text="item.type"
            :config="textConfig"
          ></Text>
        </TransitionGroup>
      </div>
    </PhoneEmulate>
  </main>
</template>
<script setup>
import { ref } from 'vue'
import PhoneEmulate from '@/components/PhoneEmulate.vue'
import Text from '@/components/BasicComponent/Text/index.vue'
import { useDraggable } from 'vue-draggable-plus'
import { useBuilderStore } from '@/stores/builder.js'
import { storeToRefs } from 'pinia'
const { currentPage } = storeToRefs(useBuilderStore())

const sortableRef = ref(null)
const nodeList = ref([
  {
    type: 'text'
  },
  {
    type: 'text2'
  },
  {
    type: 'text3'
  },
  {
    type: 'text4'
  }
])
useDraggable(sortableRef, nodeList, {
  animation: 150
})

const textConfig = {
  styles: {
    padding: '16px 15px',
    color: '#808080',
    fontSize: '14px'
  }
}

const onDrop = (val) => {
  console.log('onDrop', val)
  nodeList.value.push({
    type: 'text' + nodeList.value.length + 1
  })
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
