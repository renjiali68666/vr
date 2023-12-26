<template>
  <div class="bottom">
    <Card @click="() => change(item.id)" :class="item.id === flag ? 'select-card' : ''" v-for="item in items" :key="item.id" :item="item"></Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/card/index.vue';
const { items } = defineProps<{ items: any }>();

const flag: any = defineModel({ default: '' });

const change = (e: string) => {
  flag.value = e;
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
