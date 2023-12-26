import { Viewer } from '@photo-sphere-viewer/core';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { viewer } from './const';
// 初始化
export const initViewer = () => {
  viewer.value = new Viewer({
    container: document.querySelector('#viewer') as HTMLElement,
    panorama: '/public/home/客厅.jpg',
    navbar: false,
    plugins: [AutorotatePlugin]
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
