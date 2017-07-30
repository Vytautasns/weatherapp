import { weatherLocationComponent } from './weather-location.component';
import './weather-location.scss';

export const weatherLocationModule = angular
  .module('components.weather.location', [])
  .component('weatherLocation', weatherLocationComponent)
  .name;
