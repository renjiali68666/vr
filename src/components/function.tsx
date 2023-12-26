import { Viewer } from '@photo-sphere-viewer/core';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import { viewer } from './const';
// 初始化
export const initViewer = () => {
  viewer.value = new Viewer({
    container: document.querySelector('#viewer') as HTMLElement,
    panorama: '/public/home/客厅.jpg',
    navbar: false,
    plugins: [AutorotatePlugin, GalleryPlugin]
  });
};

// 配置自动导航
export const setAutorotatePlugin = () => {
  const autorotatePlugin: AutorotatePlugin = viewer.value!.getPlugin(AutorotatePlugin);
  autorotatePlugin.setOptions({
    autostartDelay: 1000,
    autorotatePitch: '0.1deg',
    autostartOnIdle: true
  });
};

//设置图库
export const setGalleryPlugin = () => {
  const galleryPlugin: GalleryPlugin = viewer.value!.getPlugin(GalleryPlugin);
  galleryPlugin.setItems([
    {
      id: 'pano-1',
      name: '客厅',
      panorama: '/public/home/客厅.jpg',
      thumbnail: '/public/home/客厅.jpg'
    }
  ]);
};
