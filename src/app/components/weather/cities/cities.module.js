import { citiesComponent } from './cities.component';
import { CitiesService } from './cities.service';

export const citiesModule = angular
  .module('component.weather.cities', [])
  .component('cities', citiesComponent)
  .service('CitiesService', CitiesService)
  .name;
