import { footerComponent } from './footer.component';

export const footerModule = angular
  .module('commot.footer', [])
  .component('footer', footerComponent)
  .name;
