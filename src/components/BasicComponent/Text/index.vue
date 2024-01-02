<template>
  <div class="cursor-pointer edit relative" :style="config.styles" @click="onClick">
    <p v-if="!text && isEdit">点击编辑文本</p>
    <p v-else>{{ text }}</p>
  </div>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  },
  isEdit: {
    type: Boolean,
    default: false
  },
  config: {
    type: Object,
    default: () => ({
      styles: {}
    })
  }
})

const onClick = () => {
  console.log('click')
}

defineExpose({
  onClick
})
</script>
