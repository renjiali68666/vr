import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { MarkersPlugin, type MarkerConfig } from '@photo-sphere-viewer/markers-plugin';
import { viewer } from './const';

export const initViewer = () => {
  viewer.value = new Viewer({
    container: document.querySelector('#viewer') as HTMLElement,
    defaultZoomLvl: 0,
    plugins: [[VirtualTourPlugin, { positionMode: 'manual', renderMode: '3d' }], MarkersPlugin]
  });
  setVirtualTourPlugin();
};

// 设置地图
export const setVirtualTourPlugin = () => {
  const virtualTourPlugin: VirtualTourPlugin = viewer.value!.getPlugin(VirtualTourPlugin); //获取组件
  virtualTourPlugin.setNodes([
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
          style: {
            maxWidth: '100px',
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Helvetica, sans-serif',
            textAlign: 'center'
          }
        },
        {
          id: 'shafa',
          position: { yaw: '-50deg', pitch: '-8deg' },
          html: '沙发',
          scale: [0.5, 1.5],
          style: {
            maxWidth: '100px',
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Helvetica, sans-serif',
            textAlign: 'center'
          }
        }
      ] as MarkerConfig[],
      links: [
        {
          nodeId: '2',
          name: '厨房',
          position: { yaw: '150deg', pitch: '0deg' }
        },
        {
          nodeId: '3',
          name: '卫生间',
          position: { yaw: '86deg', pitch: '0deg' }
        },
        {
          nodeId: '4',
          name: '卧室',
          position: { yaw: '-155deg', pitch: '0deg' }
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
          position: { yaw: '-90deg', pitch: '0deg' }
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
          position: { yaw: '120deg', pitch: '0deg' }
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
          position: { yaw: '105deg', pitch: '0deg' }
        }
      ]
    }
  ]);
};
