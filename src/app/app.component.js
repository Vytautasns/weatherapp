export const AppComponent = {
  template: `
  <div class="uk-container uk-margin-top uk-card-default uk-padding">
    <h1 class="uk-heading-line uk-width-1-1"><span translate>HEADLINE</span></h1>
    <div class="uk-grid-small uk-grid-divider" uk-grid>
      <div class="uk-width-1-5">
        <span translate="CLICKED_N_TIMES" translate-value-n="{{$ctrl.sum}}"></span>
      </div>
      <div class="uk-width-4-5">
        <div><button class="uk-button uk-button-primary" ng-click="$ctrl.goUp()">Click</button></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div>
          <button class="uk-button uk-button-primary" ng-click="$ctrl.changeLang('lt')">LT</button>
          <button class="uk-button uk-button-primary" ng-click="$ctrl.changeLang('en')">EN</button>
        </div>
      </div>
    </div>
  </div>
  `,
  controller: class AppController {
    constructor($scope, $translate) {
      'ngInject';
      this.$scope = $scope;
      this.$translate = $translate;
    }
    $onInit() {
      this.title = 'Weather app!';
      this.sum = 0;
    }
    goUp() {
      this.sum++;
    }
    changeLang(langId) {
      this.$translate.use(langId);
    }
  }
};
