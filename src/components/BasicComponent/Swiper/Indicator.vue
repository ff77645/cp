<template>
  <div class="w-full" :style="{ '--indicator-color': color }">
    <!-- dot -->
    <ul v-if="type === 'dot'" class="flex flex-row flex-nowrap gap-3 justify-center">
      <li
        v-for="i in lenght"
        :key="i"
        :class="{ 'bg-[var(--indicator-color)]': i === activeIndex }"
        class="w-2 h-2 rounded-full box-border border border-solid border-[var(--indicator-color)]"
      ></li>
    </ul>
    <!-- rect -->
    <ul v-else-if="type === 'rect'" class="flex flex-row flex-nowrap gap-3 justify-center">
      <li
        v-for="i in lenght"
        :key="i"
        :class="{ 'bg-[var(--indicator-color)]': i === activeIndex }"
        class="w-2 h-2 rounded-[1px] box-border border border-solid border-[var(--indicator-color)]"
      ></li>
    </ul>
    <!-- round -->
    <ul v-else-if="type === 'round'" class="flex flex-row flex-nowrap gap-3 justify-center">
      <li
        v-for="i in lenght"
        :key="i"
        :class="{ 'bg-[var(--indicator-color)] w-[14px]': i === activeIndex }"
        class="w-2 h-2 rounded-full box-border border border-solid border-[var(--indicator-color)]"
      ></li>
    </ul>
    <!-- number -->
    <div v-else class="flex justify-end">
      <div
        class="mx-3 rounded-full border border-solid border-[var(--indicator-color)] bg-white text-[var(--indicator-color)] text-xs px-1"
      >
        {{ activeIndex }}/{{ lenght }}
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  type: {
    type: String,
    default: 'dot'
  },
  lenght: Number,
  activeIndex: {
    type: Number,
    default: 1
  },
  color: {
    type: String,
    default: '#BD8B46'
  }
})
</script>
