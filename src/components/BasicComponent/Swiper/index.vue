<template>
  <div class="cursor-pointer relative box-border" :style="data.style">
    <swiper class="h-60" :allowTouchMove="false">
      <swiper-slide class="w-full" v-for="(item, idx) in data.config.imgList" :key="idx">
        <el-image class="w-full" :src="item.src"></el-image>
      </swiper-slide>
    </swiper>
    <Indicator
      class="absolute bottom-2 z-10"
      :type="data.config.indicatorType"
      :lenght="3"
    ></Indicator>
  </div>
</template>
<script setup>
import 'swiper/css'
//  import 'swiper/css/pagination'
//  import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue'
import Indicator from './Indicator.vue'

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

// const modules = [Pagination]
</script>
