<template>
  <photo-sphere-viewer></photo-sphere-viewer>
</template>

<script setup lang="ts">
import PhotoSphereViewer from './components/photo-sphere-viewer.vue';
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
