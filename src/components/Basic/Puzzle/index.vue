<template>
  <div class="relative box-border puzzle-wrap" :style="data.style">
    <div class="grid puzzle" :class="data.config.layoutType">
      <div v-for="(item, idx) in data.config.imgList" :key="idx" class="puzzle-item">
        <img class="h-full w-full object-cover" :src="item.src" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  isEdit: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    default: () => ({})
  }
})
</script>
<style lang="scss" scoped>
@import './puzzle.scss';
</style>
