import templateUrl from './weather-today.html';

export const weatherTodayComponent = {
  bindings: {
    weather: '<',
  },
  templateUrl,
  controller: class WeatherTodayComponent {
    constructor($filter) {
      'ngInject';
    }
    $onChanges(changes) {
      if (changes.weather) {
        this.weather = Object.assign({}, this.weather);
      }
    }
  }
}
