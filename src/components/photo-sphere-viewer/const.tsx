import type { Viewer } from '@photo-sphere-viewer/core';
import { ref } from 'vue';
export const viewer = ref<Viewer>();
export const flag = ref<string>('pano-1');

export const items = [
  {
    id: 'pano-1',
    name: '客厅',
    panorama: '/home/客厅.jpg',
    thumbnail: '/home/客厅.jpg'
  },
  {
    id: 'pano-2',
    name: '厨房',
    panorama: '/home/厨房.jpg',
    thumbnail: '/home/厨房.jpg'
  },
  {
    id: 'pano-3',
    name: '洗手间',
    panorama: '/home/洗手间.jpg',
    thumbnail: '/home/洗手间.jpg'
  },
  {
    id: 'pano-4',
    name: '卧室',
    panorama: '/home/卧室.jpg',
    thumbnail: '/home/卧室.jpg'
  }
];
