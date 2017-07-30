import { weatherTodayComponent } from './weather-today.component';
import './weather-outside.scss';

export const weatherTodayModule = angular
  .module('components.weather.weather-today', [])
  .component('weatherToday', weatherTodayComponent)
  .name;
