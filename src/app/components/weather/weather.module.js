import { weatherComponent } from './weather.component';
import { weatherTodayModule } from './weather-today/weather-today.module';
import { weatherForecastModule } from './weather-forecast/weather-forecast.module';
import { weatherLocationModule } from './weather-location/weather-location.module';
import { citiesModule } from './cities/cities.module';
import { WeatherService } from './weather.service';
import { weatherFilter } from './weather.filter';

export const weatherModule = angular
  .module('components.weather', [
    weatherTodayModule,
    weatherLocationModule,
    weatherForecastModule,
    citiesModule
  ])
  .component('weather', weatherComponent)
  .service('WeatherService', WeatherService)
  .filter('weatherFilter', weatherFilter)
  .name;
