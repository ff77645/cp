<template>
  <div class="puzzle-wrap">
    <div class="grid puzzle h-full" :class="className">
      <div :class="{ active }" class="puzzle-item" v-for="i in length" :key="i"></div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  length: Number,
  active: Boolean,
  className: String
})
</script>

<style lang="scss" scoped>
@import '../Puzzle/puzzle.scss';
.puzzle {
  --puzzle-gap: 2px;
}
.puzzle-item {
  background-color: #cdcdcd;
  border-radius: 1px;
}
.active {
  background-color: #dabd96;
}
</style>
