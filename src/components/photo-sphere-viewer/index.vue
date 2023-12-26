<template>
  <div id="viewer" class="photo-sphere-viewer"></div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';
import { initViewer } from './function';

nextTick(() => {
  initViewer();
});
</script>
<style lang="less" scoped>
.photo-sphere-viewer {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
