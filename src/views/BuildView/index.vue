<template>
  <section class="min-w-[1024px] h-screen flex flex-col flex-nowrap">
    <BuildHeader></BuildHeader>
    <section class="flex-auto overflow-hidden flex flex-row flex-nowrap bg-[#F2F3F5]">
      <AsideLeft class="flex-1"></AsideLeft>
      <Container></Container>
      <AsideRight class="flex-1"></AsideRight>
    </section>
  </section>
</template>

<script setup>
import BuildHeader from './BuildHeader.vue'
import AsideLeft from './AsideLeft.vue'
import AsideRight from './AsideRight.vue'
import Container from './Container.vue'
</script>
