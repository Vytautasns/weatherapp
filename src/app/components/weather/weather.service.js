import * as constants from '../../app.constants'
/*
* Weather service
* Fetches weather data from openWeatherMap api
*/
export class WeatherService {
  constructor($rootScope, $translate, $resource, toastr, $log) {
    'ngInject';

    this.$translate = $translate;
    this.$rootScope = $rootScope;
    this.toastr = toastr;
    this.$log = $log;
    this.$resource = $resource;

    //  IDEA geolocate users place via api
    this.location = constants.DEFAULT_LOCATION;

    //  openWeatherMap resource api setup
    this.openWeatherMap = this.$resource(constants.URL_OPENWEATHER_BASE_URL + ':path/:subPath?q=:location&units=:units&lang=:lang',
      {
        APPID: constants.API_KEY_WEATHER,
        mode: 'json',
      },
      {
        weather: {
          method: 'JSONP',
          params: {
            path: 'weather'
          },
          isArray: false,
          headers: {
            'x-api-key': constants.API_KEY_WEATHER
          }
        },
        forecast: {
          method: 'JSONP',
          params: {
            path: 'forecast',
            cnt: 9
          },
          isArray: false,
          headers: {
            'x-api-key': constants.API_KEY_WEATHER
          }
        },
        forecastDaily: {
          method: 'JSONP',
          params: {
            path: 'forecast',
            subPath: 'daily',
            cnt: 7
          },
          isArray: false,
          headers: {
            'x-api-key': constants.API_KEY_WEATHER
          }
        }
      }
    );
  }

  queryFor(type, success) {
    //  Set new values for localization
    let units = this.$translate.instant('UNITS');
    let lang = this.$translate.proposedLanguage();

    //  Build query for weather
      this.openWeatherMap[type]({
        location: this.location,
        units: units,
        lang: lang
      }, (response) => {
        success(response);
      }, (error) => {
        this.location = constants.DEFAULT_LOCATION;
        this.toastr.error(`Error getting ${type}`);
        error.debug = 'queryFor';
        this.$log.error(error);
      });

  }

  setLocation(location) {
    if (!location) return;
    
    this.location = location;
  }




}
