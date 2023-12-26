import { Viewer } from '@photo-sphere-viewer/core';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { flag, items, viewer } from './const';
import { watch } from 'vue';

// 初始化
export const initViewer = () => {
  viewer.value = new Viewer({
    defaultZoomLvl: 0,
    container: document.querySelector('#viewer') as HTMLElement,
    navbar: false,
    plugins: [AutorotatePlugin, MarkersPlugin],
    panorama: items.find((item) => item.id === flag.value)?.panorama
  });
};

// 配置自动导航
export const setAutorotatePlugin = () => {
  const autorotatePlugin: AutorotatePlugin = viewer.value!.getPlugin(AutorotatePlugin);
  autorotatePlugin.setOptions({
    autostartDelay: 10000000000000000000000000,
    autorotatePitch: '0.1deg',
    autostartOnIdle: true
  });
};

// 配置标记点
export const setMarkersPlugin = () => {
  const markersPlugin: MarkersPlugin = viewer.value!.getPlugin(MarkersPlugin);
  markersPlugin.setMarkers([
    {
      id: 'pano-1',
      position: { yaw: '3.5deg', pitch: '3deg' },
      html: '电视机',
      scale: {
        zoom: [0.5, 1]
      },
      anchor: 'center center',
      style: {
        padding: '10px 15px',
        borderRadius: '10px',
        width: 'auto',
        display: 'inline-block',
        color: 'white',
        fontSize: '20px',
        fontFamily: 'Helvetica, sans-serif',
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.5) none repeat scroll 0 0'
      }
    },
    {
      id: 'pano-2',
      position: { yaw: '-55deg', pitch: '-8deg' },
      html: '沙发(真皮)',
      scale: {
        zoom: [0.5, 1]
      },
      anchor: 'center center',
      style: {
        padding: '10px 15px',
        borderRadius: '10px',
        width: 'auto',
        display: 'inline-block',
        color: 'white',
        fontSize: '20px',
        fontFamily: 'Helvetica, sans-serif',
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.5) none repeat scroll 0 0'
      }
    }
  ]);
};

watch(
  () => flag.value,
  () => {
    viewer.value?.setPanorama(items.find((item) => item.id === flag.value)?.panorama);
  }
);
