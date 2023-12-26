<template>
  <div class="card">
    <img :src="item.thumbnail" alt="" />
    <div class="name">{{ item.name }}</div>
  </div>
</template>

<script setup lang="ts">
const { item } = defineProps<{ item: any }>();
</script>

<style lang="less" scoped>
@import './index.less';
</style>
