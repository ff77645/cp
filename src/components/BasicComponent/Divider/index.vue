<template>
  <div
    :style="data.style"
    class="relative box-border px-[var(--padding-x)] py-[var(--padding-y)] bg-[var(--bg-color)]"
  >
    <!-- <ul 
      v-if="data.style['--border-style'] === 'dotted'" 
      class="flex flex-row justify-between flex-wrap gap-[var(--border-width)] overflow-hidden h-[var(--border-width)]"
    >
      <li 
        v-for="i in 100"
        :key="i"
        class="w-[var(--border-width)] h-[var(--border-width)] rounded-full bg-[var(--border-color)]"
      ></li>
    </ul> -->
    <!-- v-else -->
    <div
      class=""
      :style="{
        borderTop: 'var(--border-width) var(--border-color) var(--border-style)'
      }"
    ></div>
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
