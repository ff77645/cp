<template>
  <div class="">
    <div class="py-3 border-b border-[#D8D8D8] border-solid text-[#464C5B] font-bold text-lg">
      轮播图
    </div>
    <Collapse class="px-0 py-4" title="图片设置">
      <p class="text-[#999999] text-xs mt-[-12px]">(图片推荐375*230 像素，最多添加10张图片)</p>
      <ul>
        <li
          v-for="(img, idx) in m.config.imgList"
          :key="idx"
          class="bg-[#F2F3F5] rounded p-3 mt-3 relative"
        >
          <el-icon
            @click="deleteImg(idx)"
            class="!absolute top-[-10px] right-[-10px] cursor-pointer"
            color="#999999"
            size="20px"
          >
            <CircleClose />
          </el-icon>
          <el-image :src="img.src" lazy />
          <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
            <span class="text-nowrap text-[#666666] text-sm">图片名称</span>
            <span class="text-nowrap text-[#666666] text-sm">{{ img.name }}</span>
          </div>
          <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
            <span class="text-nowrap text-[#666666] text-sm">跳转链接</span>
            <el-select v-model="img.link" class="m-2" placeholder="跳转链接">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </li>
      </ul>
      <el-button @click="addImg" class="w-full mt-3" :icon="Plus" size="large">添加一个</el-button>
    </Collapse>
    <Collapse class="" title="样式设置">
      <p class="text-[#666666]">指示器样式</p>
      <div class="flex flex-row flex-nowrap justify-between h-8 mt-3">
        <div
          v-for="t in indicatorType"
          :key="t"
          :class="m.config.indicatorType === t ? 'border-[#BD8B46]' : 'border-[#E6E6E6]'"
          class="border border-solid p-2 rounded flex items-center"
          @click="m.config.indicatorType = t"
        >
          <Indicator
            class="scale-75"
            :type="t"
            :lenght="3"
            :activeIndex="t === 'round' ? 2 : 1"
            :color="m.config.indicatorType === t ? '#BD8B46' : '#999999'"
          ></Indicator>
        </div>
      </div>
      <p class="text-[#666666] text-sm mt-3">
        指示器切换时间<span class="text-[#999999] text-xs">(1000等于1秒)</span>
      </p>
      <el-input v-model="m.config.delay" type="number" class="mt-3"></el-input>
      <div class="flex flex-row flex-nowrap gap-6 items-center mt-4">
        <span class="text-nowrap text-[#666666] text-sm">指示器颜色</span>
        <el-color-picker v-model="m.config.indicatorColor" />
      </div>
    </Collapse>
  </div>
</template>
<script setup>
import Collapse from '@/components/Collapse.vue'
import { useBuilderStore } from '@/stores/builder.js'
import { CircleClose, Plus } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import Indicator from '../Swiper/Indicator.vue'

const builderStore = useBuilderStore()
const { currentComponent: m } = storeToRefs(builderStore)

const deleteImg = (idx) => {
  m.value.config.imgList.splice(idx, 1)
}
const addImg = () => {
  m.value.config.imgList.push({
    src: 'http://pic.yupoo.com/isfy666/695a996e/393b433f.jpg',
    name: 'test',
    link: ''
  })
}

const indicatorType = ['dot', 'rect', 'round', 'number']

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  }
]
</script>
