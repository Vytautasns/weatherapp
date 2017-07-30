import templateUrl from './weather-location.html';

export const weatherLocationComponent = {
  bindings: {
    city: '<',
    changeLocation: '&'
  },
  templateUrl,
  controller: class WeatherLocationComponent {
    constructor() {
      'ngInject';
      this.search = false;
      this.searchQuery = '';
    }

    $onInit() {
      this.date = new Date();
    }

    submit() {
      // Submit search query
      this.changeLocation({
       $event: {
         city: this.searchQuery
       }
     });
    //  Reset fields
     this.search = false;
     this.searchQuery = '';
    }

  }
}
