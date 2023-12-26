import { Viewer } from '@photo-sphere-viewer/core';
import { viewer } from './const';

export const initViewer = () => {
  viewer.value = new Viewer({
    container: document.querySelector('#viewer') as HTMLElement,
    panorama: '/public/客厅.jpg',
    defaultZoomLvl: 0
  });
};
