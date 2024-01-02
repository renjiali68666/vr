import { EquirectangularAdapter, Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { nodes, selectId, viewer } from './const';

export const initViewer = () => {
  viewer.value = new Viewer({
    container: document.querySelector('#viewer') as HTMLElement,
    adapter: [
      EquirectangularAdapter,
      {
        interpolateBackground: true,
        resolution: 512
      }
    ],
    defaultZoomLvl: 0,
    navbar: false,
    plugins: [
      [
        VirtualTourPlugin,
        {
          positionMode: 'manual',
          renderMode: 'markers',
          markerStyle: {
            element: null,
            html: `<div class='click-animation'></div>`
          }
        }
      ],
      MarkersPlugin,
      [
        AutorotatePlugin,
        {
          autorotateSpeed: '1rpm'
        }
      ]
    ]
  });
  setVirtualTourPlugin();
};

// 设置地图
export const setVirtualTourPlugin = () => {
  const virtualTourPlugin: VirtualTourPlugin = viewer.value!.getPlugin(VirtualTourPlugin); //获取组件
  virtualTourPlugin.setNodes(nodes);
  selectId.value = nodes[0].id;
};

// 设置场景
export const setNode = (nodeId: string) => {
  const virtualTourPlugin: VirtualTourPlugin = viewer.value!.getPlugin(VirtualTourPlugin); //获取组件
  virtualTourPlugin.setCurrentNode(nodeId);
  selectId.value = nodeId;
  virtualTourPlugin.addEventListener('enter-arrow', (e) => {
    selectId.value = e.node.id;
  });
};
