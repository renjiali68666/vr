<template>
  <div ref="viewer" class="photo-sphere-viewer"></div>
</template>

<script setup lang="ts">
import { Viewer } from '@photo-sphere-viewer/core';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';
import { onMounted, ref } from 'vue';
const viewer = ref<HTMLElement>();

onMounted(() => {
  const viewerRef = new Viewer({
    plugins: [
      [
        GyroscopePlugin,
        {
          moveMode: 'fast',
          state: {}
        }
      ]
    ],
    container: viewer.value as HTMLElement,
    panorama: '外围.jpg',
    navbar: ['gyroscope']
  });
  console.log(viewerRef.navbar.getButton('gyroscope'));
  viewerRef.navbar.getButton('gyroscope').toggle();
});
</script>
<style lang="less" scoped>
.photo-sphere-viewer {
  width: 100vw;
  height: 80vh;
}
</style>
