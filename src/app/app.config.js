export default function routing ($urlRouterProvider, $locationProvider, $translateProvider) {
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
};
