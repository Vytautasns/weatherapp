import { toolbarComponent } from './toolbar.component';

export const toolbarModule = angular
  .module('common.toolbar', [])
  .component('toolbar', toolbarComponent)
  .name;
