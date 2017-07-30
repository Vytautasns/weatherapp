import templateUrl from './weather-forecast.html';

export const weatherForecastComponent = {
  bindings: {
    forecast: '<',
  },
  templateUrl,
  controller: class WeatherForecastComponent {
    constructor($filter, $translate) {
      'ngInject';
      this.$filter = $filter;
      this.$translate = $translate;
    }

    $onChanges(changes) {
      if (changes.forecast) {

        this.forecast = Object.assign({}, this.forecast);

        //  Initialize data for chart
        let dataPoints = {
          temperatures: [],
          times: [],
        };

        if (this.forecast.list) {
          // Generate data for  chart
          for (var i = 0; i < this.forecast.list.length; i++) {
            dataPoints.temperatures.push({
              y: this.forecast.list[i].main.temp,
              marker: {
                symbol: `url(http://openweathermap.org/img/w/${ this.forecast.list[i].weather[0].icon}.png)`
              }
            });
            dataPoints.times.push(this.$filter('date')(this.forecast.list[i].dt*1000, 'shortTime'));
          }

        }

        // Initialize chart with the data
        this.initChart(dataPoints);
      }
    }


    initChart(dataPoints) {
      Highcharts.chart('chart-container', {
          chart: {
              type: 'spline'
          },
          title: {
              text: ''
          },
          xAxis: {
              categories: dataPoints.times
          },
          yAxis: {
              title: {
                  text: ' '
              },
              labels: {
                  formatter: function () {
                      return this.value + '°';
                  }
              }
          },
          tooltip: {
              crosshairs: true,
              shared: true
          },
          plotOptions: {
              spline: {
                  marker: {
                      radius: 4,
                      lineColor: '#ffa500',
                      lineWidth: 1
                  }
              }
          },
          series: [{
              name: this.$translate.instant('TEMPERATURE'),
              marker: {
                  symbol: 'square'
              },
              data: dataPoints.temperatures

          }]
        });
    }

  }
}
