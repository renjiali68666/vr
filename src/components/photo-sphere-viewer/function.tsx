import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { nodes, selectId, viewer } from './const';

export const initViewer = () => {
  viewer.value = new Viewer({
    container: document.querySelector('#viewer') as HTMLElement,
    defaultZoomLvl: 0,
    navbar: false,
    plugins: [[VirtualTourPlugin, { positionMode: 'manual', renderMode: '3d' }], MarkersPlugin, AutorotatePlugin]
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
};
