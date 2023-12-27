<template>
  <div id="viewer" class="photo-sphere-viewer"></div>
  <div class="bottom-image">
    <div class="item" v-for="item in nodes" :key="item.id" @click="() => setNode(item.id)">
      <div class="image">
        <img :src="item.panorama" />
      </div>
      <div class="text"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';
import { nodes } from './const';
import { initViewer, setNode } from './function';

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
.bottom-image {
  position: absolute;
  bottom: 102px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 108px;
  overflow: hidden;
  overflow-x: auto;
  .item {
    flex-shrink: 0;
    width: 92px;
    height: 92px;
    border: double 1px #fff;
    border-radius: 10px;
    margin: 0 8px;
    z-index: 99999 !important;
    cursor: pointer;
    overflow: hidden;
    .image {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
