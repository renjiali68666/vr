<template>
  <div ref="viewer" class="photo-sphere-viewer"></div>
</template>

<script setup lang="ts">
import { Viewer } from '@photo-sphere-viewer/core';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';
import { onMounted, ref } from 'vue';
const viewer = ref<HTMLElement>();

onMounted(() => {
  new Viewer({
    plugins: [GyroscopePlugin],
    container: viewer.value as HTMLElement,
    panorama: '外围.jpg'
  });
});
</script>
<style lang="less" scoped>
.photo-sphere-viewer {
  width: 100vw;
  height: 100vh;
}
</style>
