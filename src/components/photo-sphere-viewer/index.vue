<template>
  <div id="viewer" class="photo-sphere-viewer"></div>
  <div class="bottom-image">
    <div class="item" v-for="item in nodes" :key="item.id" @click="() => setNode(item.id)" :class="selectId === item.id ? 'select' : ''">
      <div class="image">
        <img :src="item.panorama" />
      </div>
      <div class="text">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';
import { nodes, selectId } from './const';
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
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
  .item {
    -webkit-tap-highlight-color: transparent; /* 针对 iOS Safari */
    text-emphasis-color: transparent; /* 通用方法 */
    outline: none; /* 移除点击时的外边框 */
    position: relative;
    flex-shrink: 0;
    width: 92px;
    height: 92px;
    border: solid 1px transparent;
    border-radius: 10px;
    margin: 0 5px;
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
    .text {
      width: 100%;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2px;
      color: #ffffff;
      line-height: 16px;
      font-size: 12px;
      text-align: center;
      word-wrap: break-word;
      background: none rgba(0, 0, 0, 0.5);
    }

    &.select {
      border-color: rgb(246, 166, 0);
      border-width: 3px;
    }
  }
}
::v-deep(.text-bg-b) {
  border-radius: 8px;
  color: #ffffffcc;
  padding: 10px 15px;
  background: none rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-size: 21px;
}
</style>
