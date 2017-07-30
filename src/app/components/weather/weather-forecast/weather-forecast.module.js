import { weatherForecastComponent } from './weather-forecast.component';

export const weatherForecastModule = angular
  .module('components.weather.forecast', [])
  .component('weatherForecast', weatherForecastComponent)
  .name;
