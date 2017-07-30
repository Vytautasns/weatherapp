import { weatherModule } from './weather/weather.module';

export const componentsModule = angular
  .module('app.components', [
    weatherModule
  ])
  .name;
