import { ref } from 'vue';
import type { Viewer } from '@photo-sphere-viewer/core';
import type { MarkerConfig } from '@photo-sphere-viewer/markers-plugin';
export const viewer = ref<Viewer>();
export const selectId = ref('');
export const nodes = [
  {
    id: '1',
    name: '客厅',
    panorama: '/客厅.jpg',
    markers: [
      {
        id: 'tv',
        position: { yaw: '3deg', pitch: '3deg' },
        html: '电视机',
        scale: [0.5, 1.5],
        className: 'text-bg-b'
      },
      {
        id: 'shafa',
        position: { yaw: '-52deg', pitch: '-8deg' },
        html: '沙发',
        scale: [0.5, 1.5],
        className: 'text-bg-b'
      }
    ] as MarkerConfig[],
    links: [
      {
        nodeId: '2',
        name: '厨房',
        position: { yaw: '150deg', pitch: '0deg' },
        arrowStyle: {
          size: 0.000001
        }
      },
      {
        nodeId: '3',
        name: '卫生间',
        position: { yaw: '86deg', pitch: '0deg' },
        arrowStyle: {
          size: 0.000001
        }
      },
      {
        nodeId: '4',
        name: '卧室',
        position: { yaw: '-155deg', pitch: '0deg' },
        arrowStyle: {
          size: 0.000001
        }
      }
    ]
  },
  {
    id: '2',
    name: '厨房',
    panorama: '/厨房.jpg',
    links: [
      {
        nodeId: '1',
        name: '客厅',
        position: { yaw: '-90deg', pitch: '0deg' },
        arrowStyle: {
          size: 0.000001
        }
      }
    ]
  },
  {
    id: '3',
    name: '卫生间',
    panorama: '/洗手间.jpg',
    links: [
      {
        nodeId: '1',
        name: '客厅',
        position: { yaw: '120deg', pitch: '0deg' },
        arrowStyle: {
          size: 0.000001
        }
      }
    ]
  },
  {
    id: '4',
    name: '卧室',
    panorama: '/卧室.jpg',
    links: [
      {
        nodeId: '1',
        name: '客厅',
        position: { yaw: '105deg', pitch: '0deg' },
        arrowStyle: {
          size: 0.000001
        }
      }
    ]
  }
];
