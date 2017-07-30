import templateUrl from './toolbar.html';

export const toolbarComponent = {
  templateUrl,
  controller: class toolbarComponent {
    constructor($translate, tmhDynamicLocale) {
      'ngInject';
      this.$translate = $translate;
      this.tmhDynamicLocale = tmhDynamicLocale;
    }
    $onInit() {
    }
  }
}
