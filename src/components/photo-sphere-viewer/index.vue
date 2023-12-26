<template>
  <div id="viewer" class="photo-sphere-viewer"></div>
  <bottom-image></bottom-image>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';
import { initViewer, setAutorotatePlugin } from './function';
import BottomImage from '@/components/bottom-image/index.vue';
nextTick(async () => {
  initViewer();
  setAutorotatePlugin();
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
