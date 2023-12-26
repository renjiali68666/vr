import { Viewer } from '@photo-sphere-viewer/core';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { flag, items, viewer } from './const';
import { watch } from 'vue';
// 初始化
export const initViewer = () => {
  viewer.value = new Viewer({
    container: document.querySelector('#viewer') as HTMLElement,
    navbar: false,
    plugins: [AutorotatePlugin],
    panorama: items.find((item) => item.id === flag.value)?.panorama
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

watch(
  () => flag.value,
  () => {
    viewer.value?.setPanorama(items.find((item) => item.id === flag.value)?.panorama);
  }
);
