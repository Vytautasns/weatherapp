import templateUrl from './weather.html';

export const weatherComponent = {
  templateUrl,
  controller: class WeatherComponent {
    constructor(WeatherService, $rootScope) {
      'ngInject';
      this.weatherService = WeatherService;
      this.$rootScope = $rootScope;

      // Listen for language change to update weather data
      this.$rootScope.$on('$translateChangeSuccess', (e) => {

        this.weatherService.queryFor('weather', (response) => {
          this.weatherData = response;
        });

        this.weatherService.queryFor('forecast', (response) => {
          this.weatherForecast = response;
        });

      });
    }

    $onInit() {
      //  Get initial forecast
      this.weatherService.queryFor('weather', (response) => {
        this.weatherData = response;
      });

      this.weatherService.queryFor('forecast', (response) => {
        this.weatherForecast = response;
      })

    }

    changeLocation({ city }) {
      if (!city) return;

      this.weatherService.setLocation(city);

      this.weatherService.queryFor('weather', (response) => {
        this.weatherData = response;
      });

      this.weatherService.queryFor('forecast', (response) => {
        this.weatherForecast = response;
      });

    }




  }
}
