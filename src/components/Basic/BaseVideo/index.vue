<template>
  <div class="relative box-border" :style="data.style">
    <video
      class="w-full"
      :src="data.config.src"
      :poster="data.config.poster"
      controls="controls"
      :autoplay="!isEdit && data.config.autoplay"
    ></video>
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
