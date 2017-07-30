import templateUrl from './cities.html';

export const citiesComponent = {
  bindings: {
    changeLocation: '&'
  },
  templateUrl,
  controller: class CitiesComponent {
    constructor(CitiesService) {
      'ngInject';
      this.citiesService = CitiesService;
    }

    $onInit() {
      this.favorites = this.citiesService.getFavorites();
    }

    selectCity(city) {
      
      this.changeLocation({
       $event: {
         city: city
       }
     });
    }
  }
}
