import { ref } from 'vue';
import type { Viewer } from '@photo-sphere-viewer/core';
import type { MarkerConfig } from '@photo-sphere-viewer/markers-plugin';
import type { VirtualTourNode } from '@photo-sphere-viewer/virtual-tour-plugin';
export const viewer = ref<Viewer>();
export const selectId = ref('');
export const nodes = [
  {
    id: '1',
    name: '渔田广场',
    panorama: '/广场.jpg',
    markers: [] as MarkerConfig[],
    links: [
      {
        nodeId: '2',
        name: '游客中心',
        position: { yaw: '113deg', pitch: '2deg' },
        markerStyle: {
          size: { width: 36, height: 36 }
        }
      }
    ]
  },
  {
    id: '2',
    name: '沙盘',
    panorama: '/沙盘.jpg',
    links: [
      {
        nodeId: '1',
        name: '渔田广场',
        position: { yaw: '-180deg', pitch: '0deg' },
        markerStyle: {
          size: { width: 36, height: 36 }
        }
      },
      {
        nodeId: '3',
        name: '大厅',
        position: { yaw: '0deg', pitch: '-3deg' },
        markerStyle: {
          size: { width: 36, height: 36 }
        }
      },
      {
        nodeId: '4',
        name: '二楼转角',
        position: { yaw: '-78deg', pitch: '-1deg' },
        markerStyle: {
          size: { width: 36, height: 36 }
        }
      }
    ]
  },
  {
    id: '3',
    name: '大厅',
    panorama: '/大厅.jpg',
    links: [
      {
        nodeId: '2',
        name: '沙盘',
        position: { yaw: '-120deg', pitch: '-1deg' },
        markerStyle: {
          size: { width: 36, height: 36 }
        }
      }
    ]
  },
  {
    id: '4',
    name: '二楼转角',
    panorama: '/二楼转角.jpg',
    links: [
      {
        nodeId: '2',
        name: '沙盘',
        position: { yaw: '-10deg', pitch: '-20deg' },
        markerStyle: {
          size: { width: 36, height: 36 }
        }
      }
    ]
  }
] as VirtualTourNode[];
