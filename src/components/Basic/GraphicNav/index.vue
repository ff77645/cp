<template>
  <div class="relative box-border" :style="data.style">
    <div
      class="grid py-4 justify-items-center gap-y-3"
      :style="{
        gridTemplateColumns: 'repeat(var(--cols,3),1fr)'
      }"
    >
      <div v-for="i in 3" :key="i" class="text-center w-12">
        <img
          class="rounded w-full h-12 object-cover"
          src="http://pic.yupoo.com/isfy666/e895e43d/9a2f6fc5.jpg"
          alt=""
        />
        <span class="mt-2 text-[#333333] text-sm">导航一</span>
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
