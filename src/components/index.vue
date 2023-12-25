<template>
  <div ref="element" class="photo-sphere-viewer"></div>
</template>

<script setup lang="ts">
import { Viewer } from '@photo-sphere-viewer/core';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { ref, nextTick } from 'vue';
const element = ref<HTMLElement>();
nextTick(() => {
  const viewer = new Viewer({
    container: element.value as HTMLElement,
    plugins: [
      [
        GalleryPlugin,
        {
          thumbnailSize: { width: 100, height: 100 }
        }
      ],
      [
        VirtualTourPlugin,
        {
          positionMode: 'manual',
          renderMode: '3d'
        }
      ]
    ]
  });
  const virtualTour: any = viewer.getPlugin(VirtualTourPlugin);
  virtualTour.setNodes(
    [
      {
        id: 'node-1',
        panorama: '/外围.jpg',
        position: [],
        links: [
          {
            nodeId: 'node-2',
            position: { textureX: -5000, textureY: 2500 },
            linkOffset: { yaw: 90, pitch: 0, depth: 0 }
          }
        ]
      },
      {
        id: 'node-2',
        panorama: '/沙盘.jpg',
        links: [
          {
            nodeId: 'node-1',
            linkOffset: { yaw: -45, pitch: 0, depth: 1 },
            position: { textureX: 2000, textureY: 2500 }
          },
          {
            nodeId: 'node-3',
            linkOffset: { yaw: -90, pitch: 0, depth: 2 },
            position: { textureX: -5000, textureY: 2500 }
          },
          {
            nodeId: 'node-4',
            linkOffset: { yaw: 2, pitch: 0, depth: 3 },
            position: { textureX: 2000, textureY: 2500 }
          }
        ]
      },
      {
        id: 'node-3',
        panorama: '/二楼.jpg',
        links: [
          {
            nodeId: 'node-2',
            linkOffset: { yaw: -90, pitch: 10, depth: 1 },
            position: { textureX: -2500, textureY: 2500 }
          }
        ]
      },
      {
        id: 'node-4',
        panorama: '/public/大厅.jpg',
        links: [
          {
            nodeId: 'node-2',
            linkOffset: { yaw: -180, pitch: 0, depth: 0 },
            position: { textureX: -2500, textureY: 2500 }
          }
        ]
      }
    ],
    'node-2'
  );
});
</script>
<style lang="less" scoped>
.photo-sphere-viewer {
  width: 100%;
  height: 100%;
}
</style>
